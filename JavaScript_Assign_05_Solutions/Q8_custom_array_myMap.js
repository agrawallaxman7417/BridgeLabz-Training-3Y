// Q8: Implementing a custom myMap() method for arrays

// Define the method as non-enumerable so it does not appear in
// normal for...in iteration over arrays.
Object.defineProperty(Array.prototype, "myMap", {
    value: function (callback, thisArg) {
        if (this === null || this === undefined) {
            throw new TypeError("myMap called on null or undefined");
        }

        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }

        const source = Object(this);
        const length = source.length >>> 0;
        const result = new Array(length);

        for (let index = 0; index < length; index++) {
            // Match map(): skip indexes that are empty in a sparse array.
            if (index in source) {
                result[index] = callback.call(
                    thisArg,
                    source[index],
                    index,
                    source
                );
            }
        }

        return result;
    },
    writable: true,
    configurable: true,
    enumerable: false
});

const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(number => number * 2);
const indexedNumbers = numbers.myMap((number, index) => number + index);

console.log("Doubled:", doubledNumbers);       // [2, 4, 6]
console.log("With index:", indexedNumbers);    // [1, 3, 5]

// myMap(), like map(), returns a new array and does not change
// the original array.
console.log("Original:", numbers);             // [1, 2, 3]
