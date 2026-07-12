import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const indexPath = resolve("dist/index.html");
const html = readFileSync(indexPath, "utf8")
  .replace(/\s+crossorigin/g, "")
  .replace(/<script type="module" src="([^"]+)"><\/script>/, '<script defer src="$1"></script>');

writeFileSync(indexPath, html);
