 "use strict";

// Q6: Pyramid Pattern Generator
// Optional command-line input: node Q6_Pyramid_Pattern_Generator.js 4
// If no valid positive integer is supplied, the default is 5.
const requestedRows = Number(process.argv[2]);
const rows = Number.isInteger(requestedRows) && requestedRows > 0 ? requestedRows : 5;

console.log(`=== Pyramid with ${rows} rows ===`);
for (let row = 1; row <= rows; row++) {
    let line = "";
    for (let column = 1; column <= row; column++) {
        line += "* ";
    }
    console.log(line.trimEnd());
}

// To compare var behavior, run this separate loop. var is function-scoped, not block-scoped.
// The final value of var rowVar remains available after the loop (here it becomes rows + 1).
console.log("\n=== var comparison ===");
for (var rowVar = 1; rowVar <= Math.min(rows, 4); rowVar++) {
    var varLine = "";
    for (var columnVar = 1; columnVar <= rowVar; columnVar++) {
        varLine += "* ";
    }
    console.log(varLine.trimEnd());
}
console.log("After var loop, rowVar =", rowVar, "(var remains function/global scoped in this script)");

// In strict mode, assigning to an undeclared loop variable such as `for (i = 0; ...)` throws
// ReferenceError. Use let/const or a deliberate var declaration.
// Debug tip: breakpoint inside the outer loop; step through row, column, and line.
