/**
 * Regenera imagenes que fueron borradas por error al limpiar assets no usados.
 * Toma el original de "sitio viejo" y produce webp + avif.
 *
 * Uso: node scripts/regen-missing.mjs
 */
import { mkdir, stat, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = "sitio viejo";
const OUT = "public/images";

/** nombre de salida -> { archivo original, ancho maximo } */
const JOBS = [
  { out: "services/electroválvula", from: "electrovalvula2.PNG", w: 1600 },
  { out: "services/electroválvula-alt", from: "electrovalvula.PNG", w: 1600 },
  { out: "services/mantenimiento-2", from: "mantenimiento_2.PNG", w: 1600 },
  { out: "contact/contactenos", from: "contactenenos.png", w: 1600 },
  { out: "contact/contactenos-ext", from: "contactenos_ext.jpg", w: 1800 },
];

// localizar el original por nombre sin distinguir mayusculas
async function findSource(name) {
  const entries = await readdir(SRC, { withFileTypes: true });
  for (const e of entries) {
    if (e.isFile() && e.name.toLowerCase() === name.toLowerCase()) {
      return path.join(SRC, e.name);
    }
  }
  return null;
}

for (const j of JOBS) {
  const dest = path.join(OUT, `${j.out}.webp`);
  if (existsSync(dest)) {
    const kb = (await stat(dest)).size / 1024;
    console.log(`  ya existe  ${j.out}.webp  ${kb.toFixed(0)} KB`);
    continue;
  }
  const src = await findSource(j.from);
  if (!src) {
    console.log(`  SIN ORIGINAL  ${j.from}  ->  ${j.out}`);
    continue;
  }
  await mkdir(path.dirname(dest), { recursive: true });

  const base = sharp(src).rotate().resize({
    width: j.w,
    height: j.w,
    fit: "inside",
    withoutEnlargement: true,
  });

  const webp = await base.clone().webp({ quality: 74, effort: 6 }).toBuffer();
  const avif = await base.clone().avif({ quality: 52, effort: 6 }).toBuffer();

  await sharp(webp).toFile(dest);
  await sharp(avif).toFile(dest.replace(/\.webp$/, ".avif"));

  console.log(
    `  OK  ${j.out.padEnd(28)} webp ${(webp.length / 1024).toFixed(0)} KB  avif ${(avif.length / 1024).toFixed(0)} KB`,
  );
}
