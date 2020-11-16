/*
 * @Author: junjie.lean
 * @Date: 2020-11-16 14:53:35
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-16 14:57:42
 */

/**
 * start current dir all server
 */

const { spawn } = require("child_process");
console.log("start current dir all server");

let start2000 = spawn("npm", ["run", "dev"], { cwd: __dirname + "/2000" });
let start3000 = spawn("npm", ["run", "dev"], { cwd: __dirname + "/3000" });
let start4000 = spawn("npm", ["run", "dev"], { cwd: __dirname + "/4000" });
