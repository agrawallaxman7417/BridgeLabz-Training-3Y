// Q5. Boolean Logic Access System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    // All required conditions must be true for the home to be secure.
    const isSecure =
        isAlarmOn &&
        isDoorLocked &&
        isWindowClosed &&
        isOwnerInside;

    // Use ! to demonstrate the opposite state.
    console.log(isSecure ? "Secure" : "Unsafe");
    console.log(`Unsafe condition detected: ${!isSecure}`);
}

// Test 1: all conditions satisfied
console.log("Test 1:");
checkSecurity();

// Test 2: alarm turned off
isAlarmOn = false;
console.log("Test 2:");
checkSecurity();

// Test 3: alarm on, but a window is open
isAlarmOn = true;
isWindowClosed = false;
console.log("Test 3:");
checkSecurity();

// Test 4: all conditions restored
isWindowClosed = true;
console.log("Test 4:");
checkSecurity();

// Example of OR (||): an alert is needed if the door is unlocked OR the window is open.
const needsAlert = !isDoorLocked || !isWindowClosed;
console.log(`Security alert needed: ${needsAlert}`);
