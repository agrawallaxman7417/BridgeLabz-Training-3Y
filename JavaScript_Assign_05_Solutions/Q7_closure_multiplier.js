// Q7: Closure example

function makeMultiplier(multiplier) {
    // The returned function remembers the multiplier variable,
    // even after makeMultiplier() has finished executing.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// Closure explanation:
// The inner function forms a closure over the outer function's
// variable 'multiplier'. Each returned function keeps its own
// remembered multiplier value (3 or 2).
