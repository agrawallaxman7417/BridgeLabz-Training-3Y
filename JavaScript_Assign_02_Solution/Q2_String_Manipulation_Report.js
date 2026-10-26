// Q2. String Manipulation Report

const productName = " wireless headphones PRO ";

// Trim spaces, convert to lowercase, then capitalize each word.
const trimmedName = productName.trim().toLowerCase();
const titleCaseName = trimmedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with "Pro Edition" after title casing.
const cleanedTitle = titleCaseName.replace("Pro", "Pro Edition");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
