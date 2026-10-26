// Q5. Weather Activity Planner

const temperature = 24;
const isRaining = false;
const windSpeed = 12;

// Check conditions in the required priority order.
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}

// Extra combined-condition example using && and ||.
const weatherWarning = isRaining || (temperature < 15 && windSpeed > 20);
console.log(`Weather warning: ${weatherWarning}`);
