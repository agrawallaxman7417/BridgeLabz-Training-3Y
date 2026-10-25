 "use strict";

// Q9: JSON Audit
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

console.log("=== Q9: JSON Audit ===");

rawData.forEach((line, index) => {
    const lineNumber = index + 1;
    try {
        const parsed = JSON.parse(line); // Breakpoint here to step through each record.
        const missing = [];
        if (parsed.user === undefined || parsed.user === null || parsed.user === "") missing.push("user");
        if (parsed.age === undefined || parsed.age === null || parsed.age === "") missing.push("age");

        if (missing.length > 0) {
            throw new Error(`Missing required key(s): ${missing.join(", ")}`);
        }

        const age = Number(parsed.age);
        if (!Number.isFinite(age) || age < 0) {
            throw new TypeError("age must be a valid non-negative number.");
        }

        const normalized = { ...parsed, age };
        clean.push(normalized);
        if (age < 18) under18.push(normalized);
        console.log(`Line ${lineNumber}: VALID`, normalized);
    } catch (error) {
        errors.push({ line: lineNumber, type: error.name, message: error.message, raw: line });
        console.log(`Line ${lineNumber}: ERROR ${error.name} — ${error.message}`);
    }
});

console.log("\nClean data:", clean);
console.log("Audit errors:", errors);
console.log("Under-18 users:", under18);
console.log(`Summary: ${clean.length} valid, ${errors.length} invalid.`);
