// Q2. Multi-Type Data Summary

const userName = "Aarav";                         // String
const userAge = 21;                              // Number
const isActive = true;                           // Boolean
const favoriteColors = ["blue", "green"];        // Array
const userProfile = { city: "Mathura", role: "student" }; // Object
const middleName = null;                         // Null
let optionalValue;                               // Undefined

// Array.isArray() is needed because typeof [] returns "object".
const report = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "userAge", value: userAge, type: typeof userAge },
    { label: "isActive", value: isActive, type: typeof isActive },
    { label: "favoriteColors", value: favoriteColors.join(", "), type: Array.isArray(favoriteColors) ? "array" : typeof favoriteColors },
    { label: "userProfile", value: JSON.stringify(userProfile), type: typeof userProfile },
    { label: "middleName", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "optionalValue", value: String(optionalValue), type: typeof optionalValue }
];

console.table(report);
