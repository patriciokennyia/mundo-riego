/**
 * Servidor estatico minimo para previsualizar out/ tal como lo va a servir el hosting.
 *
 * No usa `next start` (no existe en modo export) ni dependencias extra: resuelve
 * `ruta` -> `ruta/index.html`, cae en 404.html y NO sirve directorios.
 *
 *   npm run preview:static
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";

const root = join(process.cwd(), "out");
const port = Number(process.env.PORT || 3112);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function resolveFile(pathname) {
  // normalize() evita salir de out/ con ../
  const clean = normalize(decodeURIComponent(pathname)).replace(/^([/\\])+/, "");
  const target = join(root, clean);
  if (!target.startsWith(root)) return null;

  try {
    const s = await stat(target);
    if (s.isDirectory()) {
      const idx = join(target, "index.html");
      await stat(idx);
      return idx;
    }
    return target;
  } catch {
    // ruta sin extension: probar como carpeta
    try {
      const idx = join(target, "index.html");
      await stat(idx);
      return idx;
    } catch {
      return null;
    }
  }
}

createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  let file = await resolveFile(url.pathname);

  if (!file) {
    //Ultimo recurso: 404.html
    try {
      file = join(root, "404.html");
      res.writeHead(404, { "Content-Type": TYPES[".html"] });
      res.end(await readFile(file));
      return;
    } catch {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404");
      return;
    }
  }

  const ext = extname(file).toLowerCase();
  const headers = { "Content-Type": TYPES[ext] || "application/octet-stream" };
  if (file.includes(`${join("", "_next", "static")}`) || url.pathname.startsWith("/images/")) {
    headers["Cache-Control"] = "public, max-age=31536000, immutable";
  }
  res.writeHead(200, headers);
  res.end(await readFile(file));
}).listen(port, () => {
  console.log(`Estatico (out/) en http://localhost:${port}`);
});
