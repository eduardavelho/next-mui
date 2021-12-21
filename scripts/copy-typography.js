#!/usr/bin/env node

const path = require("path");
const { promises, existsSync } = require("fs");
const fs = promises;

module.exports = { copyTypography };

async function copyTypography({
  outPath = "public",
  typographyFilesPath = "node_modules/@egvelho/next-mui/typography",
} = {}) {
  console.log("Copying typography files...");

  if (!existsSync(outPath)) {
    console.log(`Creating path "${outPath}"...`);
    await fs.mkdir(outPath);
  }

  const files = await (await fs.readdir(typographyFilesPath)).filter(
    (file) => file.endsWith(".woff") || file.endsWith(".woff2")
  );

  await Promise.all(
    files.map((file) => {
      const fileName = path.basename(file);
      console.log(`Copying "${fileName}" to "${outPath}" folder...`);
      return fs.writeFile(file, path.join(outPath, fileName));
    })
  );

  console.log("Typography copying success!");
}

if (require.main === module) {
  const [outPath, typographyFilesPath] = process.argv.slice(2);

  if (!outPath) {
    console.log("Error: you must provide the argument for output path.");
    console.log("Example: copy-typography path/to/out/folder");
  } else {
    if (typographyFilesPath) {
      copyTypography({ outPath, typographyFilesPath });
    } else {
      copyTypography({ outPath });
    }
  }
}
