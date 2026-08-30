import type { PointerEvent } from "react";

/**
 * Guarda la posición del cursor dentro del elemento en las custom properties
 * `--mx` / `--my`, para que un `radial-gradient` de CSS dibuje un foco que lo sigue.
 *
 * Escribe directo en el DOM en vez de pasar por estado de React: el puntero se
 * mueve decenas de veces por segundo y un `setState` por evento provocaría un
 * re-render por cada uno.
 */
export const trackPointer = (event: PointerEvent<HTMLElement>) => {
  const element = event.currentTarget;
  const { left, top } = element.getBoundingClientRect();
  element.style.setProperty("--mx", `${event.clientX - left}px`);
  element.style.setProperty("--my", `${event.clientY - top}px`);
};

/** Fondo del foco. Se pasa tal cual al `style` del elemento que lo dibuja. */
export const spotlightBackground =
  "radial-gradient(420px circle at var(--mx, 50%) var(--my, 0px), hsl(var(--primary) / 0.09), transparent 72%)";
