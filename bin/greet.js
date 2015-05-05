#!/usr/bin/env node
//console.log("yzq");
var greet = require("../index.js");
//参考 ：https://github.com/substack/minimist
var argv = require("minimist")(process.argv.slice(2));

// '_' 取参数
console.log(argv);
console.log(greet(argv._,argv.drunk));