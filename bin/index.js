#!/usr/bin/env node
const exec = require("child_process").execSync;
var program = require("commander");

program.version("0.1.0");

program
  .command("ui [env]")
  .description("run setup commands for all envs")
  .action(function(env, options) {
    var mode = options.setup_mode || "normal";
    env = env || "all";
    exec("npm run dev", { stdio: "inherit" });
    console.log("setup for %s env(s) with %s mode", env, mode);
  });

program.command("*").action(function(env) {
  console.log('deploying "%s"', env);
});

program.parse(process.argv);
