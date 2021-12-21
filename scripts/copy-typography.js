#!/usr/bin/env node

const path = require("path");
const { promises, existsSync } = require("fs");
const fs = promises;

module.exports = { copyTypography };

async function copyTypography({
  outPath = "public",
  typographyPath = "node_modules/@egvelho/next-mui/typography",
} = {}) {
  console.log("Copying typography files...");

  if (!existsSync(outPath)) {
    console.log(`Creating path "${outPath}"...`);
    await fs.mkdir(outPath);
  }

  const files = await (await fs.readdir(typographyPath)).filter(
    (file) => file.endsWith(".woff") || file.endsWith(".woff2")
  );

  await Promise.all(
    files.map(async (file) => {
      console.log(`Copying "${file}" to "${outPath}" folder...`);
      return await fs.copyFile(
        path.join(typographyPath, file),
        path.join(outPath, file)
      );
    })
  );

  console.log("Typography copying success!");
}

if (require.main === module) {
  const [outPath, typographyPath] = process.argv.slice(2);

  if (!outPath) {
    console.log("Error: you must provide the argument for output path.");
    console.log("Example: copy-typography path/to/out/folder");
  } else {
    if (typographyPath) {
      copyTypography({ outPath, typographyPath });
    } else {
      copyTypography({ outPath });
    }
  }
}
