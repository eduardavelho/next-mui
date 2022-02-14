#!/usr/bin/env node

const { exec } = require("child_process");

console.log("Deleting build files...");

exec(
  "rm -rf *.d.ts *.js *.js.map blog-page dash info-page page post-page section social-page components utils typography storybook-static",
  () => {
    console.log("Project cleaned with success!");
  }
);
