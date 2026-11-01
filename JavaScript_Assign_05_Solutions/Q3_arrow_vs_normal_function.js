// Q3: Difference between an arrow function and a normal method

const user = {
    name: "Laxman",

    // Arrow functions do not create their own 'this'.
    // They take 'this' from the surrounding (lexical) scope.
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName();

// In a Node.js CommonJS file, the top-level 'this' is module.exports,
// which does not have a 'name' property. Therefore, this.name is undefined.
// In other environments, the exact outer 'this' can differ, but the arrow
// function still does not get 'this' from the user object.

// FIX: Use a normal function as an object method.
user.showName = function () {
    console.log("Normal function this.name:", this.name);
};

user.showName();

// Output in Node.js CommonJS:
// Arrow function this.name: undefined
// Normal function this.name: Laxman
