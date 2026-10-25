"use strict";

// Q3: Transaction Validator
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

class NegativeAmountError extends Error {
    constructor(message) { super(message); this.name = "NegativeAmountError"; }
}
class MissingFieldError extends Error {
    constructor(message) { super(message); this.name = "MissingFieldError"; }
}
class NullTransactionError extends Error {
    constructor(message) { super(message); this.name = "NullTransactionError"; }
}

const valid = [];
const invalid = [];

console.log("=== Q3: Transaction Validator ===");

transactions.forEach((transaction, index) => {
    try {
        console.log(`Checking array index ${index}:`, transaction); // Set a breakpoint here in VS Code.
        if (transaction === null) {
            throw new NullTransactionError("Transaction entry is null.");
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new MissingFieldError("Transaction must include both id and amount.");
        }
        if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount)) {
            throw new TypeError("Amount must be a finite number.");
        }
        if (transaction.amount < 0) {
            throw new NegativeAmountError("Amount cannot be negative.");
        }
        valid.push(transaction);
        console.log(`  VALID: transaction ${transaction.id}`);
    } catch (error) {
        invalid.push({
            index,
            transaction,
            errorType: error.name,
            message: error.message
        });
        console.log(`  INVALID: ${error.name} — ${error.message}`);
    }
});

console.log("\nValid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Final counts: ${valid.length} successful, ${invalid.length} failed.`);
console.log("Debugger tip: inspect index, transaction, valid, invalid, and error in the Watch panel.");
