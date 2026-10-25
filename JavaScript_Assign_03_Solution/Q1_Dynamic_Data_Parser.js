"use strict";

// Q1: Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

console.log("=== Q1: Dynamic Data Parser ===");

for (let i = 0; i < apiData.length; i++) {
    const original = apiData[i];
    const numberValue = Number(original);
    const booleanValue = Boolean(original);
    const stringValue = String(original);

    // Number(" ") is 0 in JavaScript, but whitespace-only input is treated as invalid here.
    const whitespaceOnly = typeof original === "string" && original.trim() === "";
    const isValidNumber = Number.isFinite(numberValue) && !whitespaceOnly;

    const report = {
        index: i,
        original,
        number: numberValue,
        boolean: booleanValue,
        string: stringValue,
        status: isValidNumber ? "VALID" : "INVALID"
    };

    console.log(`[${report.status}] index=${report.index}`);
    console.log(`  Original: ${String(original)} (${original === null ? "null" : typeof original})`);
    console.log(`  Number:   ${Number.isNaN(numberValue) ? "NaN" : numberValue}`);
    console.log(`  Boolean:  ${booleanValue}`);
    console.log(`  String:   "${stringValue}"`);

    if (isValidNumber) {
        validNumbers.push(numberValue);
    } else {
        invalidNumbers.push({ index: i, original, reason: whitespaceOnly ? "Whitespace-only string" : "Not a finite numeric value" });
        console.log(`  Reason:   ${invalidNumbers[invalidNumbers.length - 1].reason}`);
    }
}

console.log("\nValid numeric data:", validNumbers);
console.log("Invalid numeric data:", invalidNumbers);
console.log(`Summary: ${validNumbers.length} valid, ${invalidNumbers.length} invalid.`);
