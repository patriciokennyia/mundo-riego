/**
 * Build de la exportacion estatica, multiplataforma.
 *
 * Se hace desde Node y no con `NEXT_OUTPUT=export next build` porque esa sintaxis
 * de variable de entorno no existe en PowerShell ni en cmd de Windows.
 *
 * Pasos: compila en modo export -> verifica la carpeta `out/` -> la comprime en
 * `dist/mundo-riego-estatico.zip` para poder subirla al hosting.
 */
import { spawn } from "node:child_process";
import { readFileSync, readdirSync, statSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

function run(cmd, args, env = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, {
      cwd: root,
      stdio: "inherit",
      shell: process.platform === "win32",
      env: { ...process.env, ...env },
    });
    p.on("error", reject);
    p.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} salio con codigo ${code}`))));
  });
}

function dirSize(dir) {
  let total = 0;
  let files = 0;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) {
      const r = dirSize(full);
      total += r.total;
      files += r.count;
    } else {
      total += s.size;
      files++;
    }
  }
  return { total, count: files };
}

console.log("==> Compilando en modo exportacion estatica (NEXT_OUTPUT=export)");
await run("npx", ["next", "build", "--turbopack"], { NEXT_OUTPUT: "export" });

const out = join(root, "out");
if (!existsSync(out)) {
  console.error("\nERROR: no se genero la carpeta out/.");
  process.exit(1);
}

// --- Verificaciones que importan para un hosting compartido -----------------
console.log("\n==> Verificando out/");
const problems = [];
const notes = [];

function must(rel, why) {
  if (!existsSync(join(out, rel))) problems.push(`falta ${rel} (${why})`);
}

must("index.html", "home");
must("404.html", "pagina de error 404");
must("robots.txt", "directivas para buscadores");
must("sitemap.xml", "mapa del sitio");
must(".htaccess", "headers de seguridad y cache en Apache");

if (!existsSync(join(out, ".htaccess"))) {
  notes.push(
    "Next.js no copio public/.htaccess a out/. Si el hosting es Apache, subilo a mano " +
      "o agrega el paso de copiado en scripts/build-export.mjs."
  );
}

// Rutas que deben existir como carpeta/index.html por el trailingSlash
const PAGES = [
  "servicios",
  "soluciones",
  "proyectos",
  "nosotros",
  "preguntas-frecuentes",
  "contacto",
  "servicios/instalacion-riego-automatico",
  "servicios/riego-por-aspercion",
  "servicios/riego-por-goteo",
  "servicios/automatizacion-y-programadores",
  "servicios/mantenimiento-y-reparacion",
  "servicios/bombas-y-bombeo",
  "servicios/diseno-y-proyecto",
  "servicios/asesoramiento-tecnico",
  "soluciones/casas-y-jardines",
  "soluciones/countries-y-barrios-cerrados",
  "soluciones/espacios-verdes-empresas",
  "soluciones/huertas-y-quintas",
  "soluciones/canchas-y-deportes",
];
for (const p of PAGES) must(`${p}/index.html`, p);

// Las imagenes deben estar copiadas y ser servibles sin optimizador
if (!existsSync(join(out, "images"))) problems.push("falta la carpeta images/");

// Ninguna referencia a /_next/image?url=... (seria un optimizador inexistente)
let imageOptimizerRefs = 0;
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else if (full.endsWith(".html")) {
      const html = readFileSync(full, "utf8");
      const n = (html.match(/\/_next\/image/g) || []).length;
      if (n) {
        imageOptimizerRefs += n;
        problems.push(`${full.replace(out, "out")} referencia /_next/image ${n} veces`);
      }
    }
  }
}
walk(out);

// Links internos: todos deben apuntar a archivos que existan
let brokenLinks = 0;
const seen = new Set();
function checkLinks(file) {
  const html = readFileSync(file, "utf8");
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (seen.has(href)) continue;
    seen.add(href);
    if (/\.(xml|txt|ico|png|webp|avif|svg|jpg|jpeg|gif|css|js|mjs|woff|woff2|ttf|eot|map)$/.test(href)) continue;
    const clean = href.replace(/\/$/, "");
    const target = href === "/" || href === "" ? "index.html" : join(clean.slice(1), "index.html");
    if (!existsSync(join(out, target))) {
      brokenLinks++;
      problems.push(`link roto en ${file.replace(out, "out")}: ${href} -> no existe out/${target}`);
    }
  }
}
for (const f of readdirSync(out)) if (f.endsWith(".html")) checkLinks(join(out, f));
for (const d of ["servicios", "soluciones"]) {
  const dir = join(out, d);
  if (existsSync(dir)) {
    for (const s of readdirSync(dir)) {
      if (s.endsWith(".html")) checkLinks(join(dir, s));
    }
  }
}

const { total, count } = dirSize(out);
const mb = (total / 1024 / 1024).toFixed(2);

console.log(`   archivos: ${count}`);
console.log(`   peso total: ${mb} MB`);
console.log(`   referencias al optimizador de imagenes: ${imageOptimizerRefs}`);
console.log(`   links internos revisados: ${seen.size}, rotos: ${brokenLinks}`);

for (const n of notes) console.log(`\n   AVISO: ${n}`);

if (problems.length) {
  console.error(`\n==> ${problems.length} PROBLEMAS:\n`);
  for (const p of problems) console.error("   - " + p);
  process.exit(1);
}

console.log("\n==> out/ OK. Para subir al hosting:");
console.log("   - copiar el CONTENIDO de out/ (no la carpeta) a la raiz web, o");
console.log("   - descomprimir dist/mundo-riego-estatico.zip");

// --- Empaquetado -------------------------------------------------------------
const dist = join(root, "dist");
const zip = join(dist, "mundo-riego-estatico.zip");
mkdirSync(dist, { recursive: true });
if (existsSync(zip)) rmSync(zip);

const packCmd =
  process.platform === "win32"
    ? {
        cmd: "powershell",
        // `out\*` ya incluye los dotfiles como `.htaccess`; nombrarlo aparte lo duplica.
        args: ["-NoProfile", "-Command", `Compress-Archive -Path 'out\\*' -DestinationPath '${zip}' -Force`],
      }
    : { cmd: "zip", args: ["-qr", zip, ".", "-x", ".*"] };

try {
  await new Promise((resolve, reject) => {
    const p = spawn(packCmd.cmd, packCmd.args, {
      cwd: root,
      stdio: "inherit",
      shell: process.platform === "win32",
    });
    p.on("error", reject);
    p.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`compress salio con ${code}`))));
  });
  const zkb = (statSync(zip).size / 1024).toFixed(0);
  console.log(`\n==> ZIP listo: dist/mundo-riego-estatico.zip (${zkb} KB)`);
} catch (e) {
  console.warn(`\n   AVISO: no se pudo crear el ZIP (${e.message}).`);
  console.warn("   Se puede subir la carpeta out/ directamente.");
}
