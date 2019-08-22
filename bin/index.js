#!/usr/bin/env node
const exec = require("child_process").execSync;
const program = require("commander");
const pkg = require("../package.json");
const path = require("path");
program.version(pkg.version);

program.command("ui").action(function() {
  process.chdir(path.join(__dirname, ".."));
  exec("npm run dev", { stdio: "inherit" });
});

program.command("*").action(function() {
  console.log("i am run");
});

program.parse(process.argv);
