// Q3. Monthly Expense Tracker

const expenses = {
    food: 6500,
    travel: 1800,
    rent: 12000,
    bills: 2200,
    leisure: 1500
};

// Add each category to the total using the assignment operator.
let totalExpenses = 0;
for (const category in expenses) {
    totalExpenses += expenses[category];
}

const averageExpense = totalExpenses / Object.keys(expenses).length;
const taxRate = 0.10;
const taxAmount = totalExpenses * taxRate;
totalExpenses += taxAmount; // Add 10% tax to the total.

console.log("--- Monthly Expense Report ---");
console.log(`Expenses before tax: ₹${(totalExpenses - taxAmount).toFixed(2)}`);
console.log(`Average expense per category (before tax): ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final amount after tax: ₹${totalExpenses.toFixed(2)}`);
