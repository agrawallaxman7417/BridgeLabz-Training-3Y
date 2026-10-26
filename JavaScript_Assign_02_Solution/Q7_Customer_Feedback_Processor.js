// Q7. Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Split on whitespace and remove empty entries to count words reliably.
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Check for negative keywords without case sensitivity.
const normalizedFeedback = feedback.toLowerCase();
const hasNegativeFeedback =
    normalizedFeedback.includes("bad") ||
    normalizedFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!hasNegativeFeedback) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
