// Q6. Progressive Discount System

const totalPurchase = 7500; // Change this value to test other tiers.
let discountPercentage;

if (totalPurchase >= 10000) {
    discountPercentage = 25;
} else if (totalPurchase >= 5000) {
    discountPercentage = 15;
} else if (totalPurchase >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = totalPurchase * discountPercentage / 100;
const finalPrice = Math.round(totalPurchase - discountAmount);

console.log("--- Discount Summary ---");
console.log(`Original total: ₹${Math.round(totalPurchase)}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount amount: ₹${Math.round(discountAmount)}`);
console.log(`Final price: ₹${finalPrice}`);
