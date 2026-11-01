// Q1: Demonstrating callback flow

// This function receives a name and a callback function.
function greetUser(name, callback) {
    console.log(`Hello ${name}`);

    // Execute the callback after printing the greeting.
    callback();
}

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Pass showEndMessage as a callback (do not call it here).
greetUser("Laxman", showEndMessage);

// Output:
// Hello Laxman
// Welcome to the course!
