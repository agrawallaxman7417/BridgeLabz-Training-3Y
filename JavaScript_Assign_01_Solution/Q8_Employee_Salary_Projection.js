// Q8. Employee Salary Projection

let currentSalary = 50000;
const annualIncrementRate = 8; // Percentage increase each year.
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * annualIncrementRate / 100;
    currentSalary = Math.round(currentSalary);

    salaryProjection.push({
        Year: year,
        "Projected Salary (₹)": currentSalary
    });
}

console.table(salaryProjection);
