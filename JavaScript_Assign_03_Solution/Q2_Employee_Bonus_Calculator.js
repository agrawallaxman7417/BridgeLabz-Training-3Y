"use strict";

// Q2: Employee Bonus Calculator
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Q2: Employee Bonus Calculator ===");

for (const employee of employees) {
    try {
        if (!employee || !employee.name || employee.salary === undefined || employee.years === undefined) {
            throw new Error("Employee record is missing a required property.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years) || salary < 0 || years < 0) {
            throw new TypeError("Salary and years must be valid non-negative numbers.");
        }

        const rate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * rate;
        const totalCompensation = salary + bonus;

        console.log(`${employee.name}: Salary ₹${salary.toFixed(2)} | Experience ${years} years | Bonus ${(rate * 100).toFixed(0)}% = ₹${bonus.toFixed(2)} | Total ₹${totalCompensation.toFixed(2)}`);
    } catch (error) {
        console.log(`Employee processing failed: ${error.name}: ${error.message}`);
    }
}

// Strict mode prevents accidental implicit globals; undeclared assignments throw ReferenceError.
