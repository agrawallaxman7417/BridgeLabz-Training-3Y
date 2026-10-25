 "use strict";

// Q10: Nested Hoisting and Closures
function outer() {
    console.log("outer count before assignment:", count); // undefined: var is hoisted in outer().
    var count = 5;

    function inner() {
        console.log("regular inner count:", count); // undefined: inner's local var shadows outer count.
        var count = 10;
    }
    inner();

    const innerArrow = () => {
        // Arrow functions do not create their own `count` binding, so this reads outer's count.
        console.log("arrow inner count:", count);
    };
    innerArrow();
}

console.log("=== Q10: Nested Hoisting and Closures ===");
outer();

// Expected output:
// outer count before assignment: undefined
// regular inner count: undefined
// arrow inner count: 5
//
// Call stack: top-level script -> outer() -> inner() returns -> innerArrow() returns -> outer() returns.
// Set breakpoints on each console.log and inspect Scope/Local/Closure in VS Code.
