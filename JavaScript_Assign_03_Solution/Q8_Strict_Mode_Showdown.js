 "use strict";

// Q8: Strict Mode Showdown
// This file is intentionally the corrected strict-mode version.
// A duplicate parameter name is a SyntaxError in strict mode, so the original function
// cannot even be parsed. Assigning to undeclared total would also throw ReferenceError.
// `delete total` is not a valid way to remove a variable binding in strict mode.

function demo(first, second) {
    let total = 10;
    console.log(`first=${first}, second=${second}, total=${total}`);
    // Object properties can be deleted; local variable bindings cannot.
    const record = { total };
    delete record.total;
    console.log("After deleting object property:", record);
}

demo(5, 10);

// To compare sloppy-mode behavior, save a separate copy WITHOUT "use strict" and use:
// function demo(a, a) { total = 10; console.log(a, total); }
// demo(5, 10);
// In sloppy mode duplicate parameters are allowed (the last value wins), and an undeclared
// assignment may create a global property in classic scripts. `delete total` may fail or
// return false; exact behavior depends on how the script is executed. Avoid this pattern.
