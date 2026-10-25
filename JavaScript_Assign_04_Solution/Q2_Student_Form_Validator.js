"use strict";

// Q2: Student Form Validator
const studentForm = document.getElementById("studentForm");

const validators = {
    name: {
        regex: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
        message: "Use alphabets only (spaces, apostrophes, and hyphens between names are allowed)."
    },
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email, such as example@domain.com."
    },
    phone: {
        regex: /^\d{10}$/,
        message: "Phone number must contain exactly 10 digits."
    },
    password: {
        regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).+$/,
        message: "Password needs at least one uppercase letter, one number, and one special character."
    }
};

function validateField(fieldName) {
    const input = document.getElementById(fieldName);
    const error = document.getElementById(`${fieldName}Error`);
    const value = input.value.trim();
    const valid = validators[fieldName].regex.test(value);

    input.classList.toggle("valid", valid);
    input.classList.toggle("invalid", !valid);
    error.textContent = valid ? "" : validators[fieldName].message;
    return valid;
}

Object.keys(validators).forEach(fieldName => {
    document.getElementById(fieldName).addEventListener("input", () => validateField(fieldName));
});

studentForm.addEventListener("submit", event => {
    event.preventDefault();
    const allValid = Object.keys(validators).map(validateField).every(Boolean);
    const result = document.getElementById("result");

    if (allValid) {
        result.textContent = "Registration form is valid.";
        result.style.color = "#16803c";
        console.log("Student form validated successfully.");
    } else {
        result.textContent = "Please correct the highlighted fields.";
        result.style.color = "#c62828";
        console.log("Student form validation failed.");
    }
});
