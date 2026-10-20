// Renders the app to static HTML after `vite build`, so crawlers and link
// previews get real content instead of an empty <div id="root">.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const serverDir = fileURLToPath(new URL('../dist-server/', import.meta.url));

const { render } = await import(pathToFileURL(`${serverDir}entry-server.js`).href);
const { html, styles } = render();

const templatePath = `${dist}index.html`;
const template = await readFile(templatePath, 'utf-8');

for (const marker of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) throw new Error(`index.html is missing ${marker}`);
}

await writeFile(
  templatePath,
  template.replace('<!--app-head-->', styles).replace('<!--app-html-->', html),
);
await rm(serverDir, { recursive: true, force: true });

console.log(`Prerendered dist/index.html (${(html.length / 1024).toFixed(1)} kB of markup)`);
