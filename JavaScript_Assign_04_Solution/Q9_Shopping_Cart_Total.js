"use strict";

// Q9: Shopping Cart Total (Cart + coupon RegExp)
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity = 1) {
        const numericPrice = Number(price);
        const numericQuantity = Number(quantity);

        if (!name || !Number.isFinite(numericPrice) || numericPrice < 0) {
            throw new TypeError("Item needs a name and a valid non-negative price.");
        }
        if (!Number.isInteger(numericQuantity) || numericQuantity < 1) {
            throw new TypeError("Quantity must be a positive integer.");
        }

        this.items.push({ name, price: numericPrice, quantity: numericQuantity });
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    applyCoupon(code) {
        // Supported examples: SAVE20 and DISC10. Number indicates percentage off.
        const match = /^(SAVE|DISC)(\d{1,2})$/.exec(code);
        if (!match) {
            throw new Error("Invalid coupon. Use a code such as SAVE20 or DISC10.");
        }

        const percent = Number(match[2]);
        if (percent < 1 || percent > 90) {
            throw new RangeError("Coupon percentage must be between 1 and 90.");
        }

        return {
            code,
            discountPercent: percent,
            originalTotal: this.getTotal(),
            discountAmount: this.getTotal() * percent / 100,
            finalTotal: this.getTotal() * (1 - percent / 100)
        };
    }

    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.name} | ₹${item.price.toFixed(2)} × ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`);
        });
    }
}

const cart = new Cart();
cart.addItem("Keyboard", 1800, 1);
cart.addItem("Mouse", 650, 2);
cart.addItem("USB-C Cable", 250, 3);

console.log("=== Shopping Cart ===");
cart.displayItems();
console.log(`Subtotal: ₹${cart.getTotal().toFixed(2)}`);

const couponCode = "SAVE20";
try {
    const summary = cart.applyCoupon(couponCode);
    console.log(`\nCoupon: ${summary.code} (${summary.discountPercent}% off)`);
    console.log(`Discount: -₹${summary.discountAmount.toFixed(2)}`);
    console.log(`Final total: ₹${summary.finalTotal.toFixed(2)}`);
} catch (error) {
    console.log(`Coupon error: ${error.message}`);
}
