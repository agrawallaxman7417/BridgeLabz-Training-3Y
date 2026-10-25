"use strict";

// Q6: Employee Management System
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = Number(salary); // Monthly salary.
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (!Number.isFinite(percent) || percent < 0) {
            throw new RangeError("Bonus percent must be a non-negative number.");
        }
        this.salary += this.salary * percent / 100;
        return this.salary;
    }

    getDetails() {
        return `${this.name} (${this.department}) | Monthly: ₹${this.salary.toFixed(2)} | Annual: ₹${this.getAnnualSalary().toFixed(2)}`;
    }
}

const employees = [
    new Employee(101, "Amit", "Engineering", 50000),
    new Employee(102, "Sara", "HR", 42000),
    new Employee(103, "Kiran", "Finance", 58000),
    new Employee(104, "Neha", "Marketing", 46000),
    new Employee(105, "Ravi", "Engineering", 62000)
];

console.log("=== Employee Annual Salaries ===");
employees.forEach(employee => console.log(employee.getDetails()));

const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log(`\nTotal annual company payout: ₹${totalAnnualPayout.toFixed(2)}`);

employees[0].applyBonus(10);
console.log("\nAfter 10% monthly salary bonus for Amit:");
console.log(employees[0].getDetails());
