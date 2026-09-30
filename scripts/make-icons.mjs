/**
 * Genera el set de iconos del sitio a partir del logo cuadrado.
 * Crea favicon.ico, icon-192.png, icon-512.png y apple-touch-icon.png.
 *
 * Uso: node scripts/make-icons.mjs
 */
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import sharp from "sharp";

const SRC = "public/images/brand/logo-cuadrado.png";
const OUT = "public/images/brand";
const ROOT = "public";

if (!existsSync(SRC)) {
  console.error(`No se encontro ${SRC}`);
  process.exit(1);
}
await mkdir(OUT, { recursive: true });

/** Logo centrado sobre fondo blanco, con padding en px por lado. */
async function padded(size, pad) {
  const logo = await sharp(SRC)
    .resize(size - pad * 2, size - pad * 2, { fit: "inside" })
    .png()
    .toBuffer();

  return sharp({
    create: { width: size, height: size, channels: 4, background: "#ffffff" },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toBuffer();
}

const jobs = [
  { out: `${OUT}/icon-192.png`, buf: () => padded(192, 20) },
  { out: `${OUT}/icon-512.png`, buf: () => padded(512, 52) },
  { out: `${OUT}/apple-touch-icon.png`, buf: () => padded(180, 20) },
  // favicon: recorte cuadrado del logo, sin padding
  {
    out: `${ROOT}/favicon.ico`,
    buf: () =>
      sharp(SRC).resize(32, 32, { fit: "cover", position: "centre" }).png().toBuffer(),
  },
];

for (const j of jobs) {
  const buf = await j.buf();
  await sharp(buf).toFile(j.out);
  const kb = (await stat(j.out)).size / 1024;
  console.log(`  ${j.out.padEnd(44)} ${kb.toFixed(1)} KB`);
}
console.log("Iconos generados.");
