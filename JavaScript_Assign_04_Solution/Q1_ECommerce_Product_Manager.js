"use strict";

// Q1: E-Commerce Product Manager (Classes + Objects)
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = Number(price);
        this.category = category;
    }

    applyDiscount(percent) {
        if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
            throw new RangeError("Discount must be between 0 and 100.");
        }
        this.price = this.price * (1 - percent / 100);
        return this.price;
    }

    getDetails() {
        return `#${this.id} | ${this.name} | ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Wireless Headphones", 2499, "Electronics"),
    new Product(2, "Notebook", 120, "Stationery"),
    new Product(3, "Smart Watch", 3999, "Electronics"),
    new Product(4, "Backpack", 1499, "Accessories")
];

products[0].applyDiscount(10);
console.log("=== All Products ===");
products.forEach(product => console.log(product.getDetails()));

console.log("\n=== Products with price > ₹1000 ===");
products
    .filter(product => product.price > 1000)
    .forEach(product => console.log(product.getDetails()));
