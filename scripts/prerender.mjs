import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { createServer } from "vite";

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputFile = path.join(rootDirectory, "dist", "index.html");
const vite = await createServer({
  root: rootDirectory,
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const { AppContent } = await vite.ssrLoadModule("/src/App.tsx");
  const appHtml = renderToString(
    React.createElement(
      StaticRouter,
      { location: "/" },
      React.createElement(AppContent),
    ),
  );
  const template = await readFile(outputFile, "utf8");
  const rendered = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  if (rendered === template) {
    throw new Error("No se encontró el contenedor raíz en dist/index.html.");
  }

  await writeFile(outputFile, rendered, "utf8");
  console.log("HTML principal prerenderizado para buscadores.");
} finally {
  await vite.close();
}
