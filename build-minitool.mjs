import fs from "node:fs/promises";
import path from "node:path";

const root = "C:/Users/horizonclip02/Documents/ChatGPT/记忆/card-calendar-web";
const dist = path.join(root, "minitool-dist");
const files = [
  "app.js",
  "app-icon.svg",
  "data.js",
  "letter-theme.css",
  "minitool-compat.css",
  "styles.css"
];

await fs.mkdir(dist, { recursive: true });
for (const file of files) {
  await fs.copyFile(path.join(root, file), path.join(dist, file));
}

const sourceHtml = await fs.readFile(path.join(root, "index.html"), "utf8");
const outputHtml = sourceHtml
  .replace(
    'content="width=device-width, initial-scale=1, viewport-fit=cover"',
    'content="width=device-width, initial-scale=1.0, viewport-fit=cover"'
  )
  .replace(/\s*<link rel="manifest"[^>]*>/, "")
  .replace(
    '<link rel="stylesheet" href="./letter-theme.css" />',
    '<link rel="stylesheet" href="./letter-theme.css" />\n    <link rel="stylesheet" href="./minitool-compat.css" />'
  );

await fs.writeFile(path.join(dist, "index.html"), outputHtml, "utf8");
console.log(dist);
