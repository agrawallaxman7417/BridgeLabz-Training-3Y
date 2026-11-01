// Q2: Passing callback functions to applyOperation()

function applyOperation(numbers, operation) {
    // map() calls operation once for each element and returns a new array.
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double every number.
const doubledNumbers = applyOperation(numbers, function (number) {
    return number * 2;
});

// Square every number using an arrow function.
const squaredNumbers = applyOperation(numbers, number => number * number);

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);
console.log("Squared numbers:", squaredNumbers);

// Output:
// Original numbers: [ 1, 2, 3, 4 ]
// Doubled numbers: [ 2, 4, 6, 8 ]
// Squared numbers: [ 1, 4, 9, 16 ]
