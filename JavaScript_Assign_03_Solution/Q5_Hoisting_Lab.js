 "use strict";

// Q5: Hoisting Lab — original sequence, with observations.
console.log("=== Original sequence ===");
console.log(score); // var is hoisted and initialized to undefined.
announce();         // Function declarations are hoisted with their function body.
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();        // status has been initialized before this call.
function startGame() { console.log(status); }

// Expected original output:
// undefined
// Game started
// ready
// The let binding exists in a temporal dead zone only from block entry until its declaration.
// This exact sequence does not access status before initialization, so it does not throw.

console.log("\n=== Clearer version ===");
const finalScore = 50;
const gameStatus = "ready";
const announceArrow = () => console.log("Game started");
const startGameArrow = () => console.log(gameStatus);
console.log(finalScore);
announceArrow();
startGameArrow();

// Arrow-function expressions are not hoisted like function declarations.
// Calling announceArrow before its const initialization would cause a ReferenceError (TDZ).
