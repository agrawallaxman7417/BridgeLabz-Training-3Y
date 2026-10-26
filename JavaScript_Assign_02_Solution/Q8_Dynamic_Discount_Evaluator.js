// Q8. Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate the cart value before discounts.
const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);

let discountedTotal = 0;

console.log("--- Item-wise Discount Summary ---");

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discountAmount = product.price * discountRate;
    const finalPrice = product.price - discountAmount;
    discountedTotal += finalPrice;

    console.log(
        `${product.item}: ₹${product.price} | Discount: ${discountRate * 100}%` +
        ` (₹${discountAmount.toFixed(2)}) | Final: ₹${finalPrice.toFixed(2)}`
    );
}

// Apply an extra 5% discount if the original cart value exceeds ₹50,000.
let extraDiscount = 0;
if (originalTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
    discountedTotal -= extraDiscount;
}

console.log(`Original cart total: ₹${originalTotal.toFixed(2)}`);
console.log(`Total after category discounts: ₹${(discountedTotal + extraDiscount).toFixed(2)}`);
console.log(`Extra overall discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final cart total: ₹${discountedTotal.toFixed(2)}`);
