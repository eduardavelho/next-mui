#!/usr/bin/env node

const { exec } = require("child_process");

console.log("Deleting build files...");

exec(
  "rm -rf *.d.ts *.js *.js.map account blog-page dash info-page page post-page section form social-page components utils typography storybook-static",
  () => {
    console.log("Project cleaned with success!");
  }
);
