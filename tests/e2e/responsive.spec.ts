import { expect, test, type Page } from "@playwright/test";

const mobileWidths = [360, 390, 430, 768];

async function expectNoHorizontalPageOverflow(page: Page) {
  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth),
    )
    .toBeLessThanOrEqual(1);
}

test.describe("responsive mobile experience", () => {
  for (const width of mobileWidths) {
    test(`fits the ${width}px viewport without page overflow`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 });
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await expect(page.getByRole("heading", { name: /Profesionales altamente capacitados/i })).toBeVisible();
      await expectNoHorizontalPageOverflow(page);
    });
  }

  test("shows image-backed hero banners on mobile", async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const cases = [
      { slug: "diagnostico", button: /Diagnóstico preciso y oportuno/i, slide: "hero-slide-diagnostico", image: "Diagnóstico Oncológico" },
      { slug: "tiempo", button: /El tiempo en el cáncer es determinante/i, slide: "hero-slide-tiempo", image: "Laboratorio de diagnóstico oncológico" },
      { slug: "futuro", button: /Somos el futuro de la oncología/i, slide: "hero-slide-futuro", image: "Futuro de la Oncología" },
    ];

    for (const item of cases) {
      const navigationButton = page.getByRole("button", { name: item.button });
      await navigationButton.click({ force: true });
      await expect(navigationButton).toHaveAttribute("aria-current", "true", { timeout: 10_000 });
      const slide = page.getByTestId(item.slide);
      await expect
        .poll(async () => Math.abs((await slide.boundingBox())?.x ?? 9999), { timeout: 10_000 })
        .toBeLessThan(2);
      const image = slide.getByRole("img", { name: item.image });
      await expect(image).toBeVisible();
      await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
      await page.locator("#inicio").screenshot({
        path: testInfo.outputPath(`hero-${item.slug}-mobile-${testInfo.project.name}.png`),
      });
    }
  });

  test("services carousel responds to a drag gesture and controls", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const carousel = page.getByTestId("services-carousel");
    await carousel.scrollIntoViewIfNeeded();
    await expect(page.getByRole("button", { name: "Ir al servicio 1" })).toHaveAttribute("aria-current", "true");

    const box = await carousel.boundingBox();
    expect(box).not.toBeNull();
    if (!box) return;

    await page.mouse.move(box.x + box.width * 0.78, box.y + box.height * 0.45);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.18, box.y + box.height * 0.45, { steps: 12 });
    await page.mouse.up();

    await expect(page.getByRole("button", { name: "Ir al servicio 2" })).toHaveAttribute("aria-current", "true");
    const nextButton = page.getByRole("button", { name: "Ver servicio siguiente" });
    const thirdService = page.getByRole("button", { name: "Ir al servicio 3" });
    await expect(nextButton).toBeEnabled();
    await expect(async () => {
      await nextButton.click();
      await expect(thirdService).toHaveAttribute("aria-current", "true");
    }).toPass({ timeout: 10_000 });
  });

  test("uses a compact locations list with an embedded venue map on small screens", async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const locations = page.getByTestId("mobile-locations");
    await locations.scrollIntoViewIfNeeded();
    await expect(locations).toBeVisible();
    await expect(page.getByTestId("desktop-locations")).toBeHidden();
    await expect(page.getByTestId("peru-map")).toBeHidden();

    const venueMap = locations.getByTestId("mobile-location-map");
    await expect(venueMap).toBeVisible();
    await expect(venueMap).toHaveAttribute("title", "Mapa de Google de la sede de Piura");
    await expect(venueMap).toHaveAttribute("src", /Piura/);

    const icaButton = locations.getByRole("button", { name: "Ica", exact: true });
    await icaButton.evaluate((button) => button.scrollIntoView({ block: "center" }));
    await icaButton.click();
    await expect(icaButton).toHaveAttribute("aria-pressed", "true");
    await expect(locations.getByRole("heading", { name: "Ica", exact: true })).toBeVisible();
    await expect(locations.getByRole("link", { name: "Ver en mapa" })).toBeVisible();
    await expect(venueMap).toHaveAttribute("title", "Mapa de Google de la sede de Ica");
    await expect(venueMap).toHaveAttribute("src", /Ica/);

    await venueMap.scrollIntoViewIfNeeded();
    const mapElement = await venueMap.elementHandle();
    const mapFrame = await mapElement?.contentFrame();
    expect(mapFrame).toBeTruthy();
    await locations.screenshot({ path: testInfo.outputPath(`locations-mobile-${testInfo.project.name}.png`) });
  });

  test("keeps the full map experience on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await expect(page.getByTestId("mobile-locations")).toBeHidden();
    await expect(page.getByTestId("desktop-locations")).toBeVisible();
    await expect(page.getByTestId("peru-map")).toBeVisible();
  });
});
