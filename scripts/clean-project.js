#!/usr/bin/env node

const { exec } = require("child_process");

console.log("Deleting build files...");

exec("rm -rf *.d.ts *.js *.js.map components utils storybook-static", () => {
  console.log("Project cleaned with success!");
});
