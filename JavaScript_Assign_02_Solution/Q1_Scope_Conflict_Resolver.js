// Q1. Scope Conflict Resolver

// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only when the employee is permanent
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${salary}`);
}

// Test both outcomes
calculateSalary(true);
calculateSalary(false);

// Changing the local parameter does not change the global bonus.
function demonstrateScope() {
    let isPermanent = true; // Local variable
    isPermanent = false;
    console.log(`Local isPermanent changed to: ${isPermanent}`);
    console.log(`Global bonus remains: ₹${bonus}`);
}

demonstrateScope();
console.log(`Global bonus outside functions: ₹${bonus}`);
