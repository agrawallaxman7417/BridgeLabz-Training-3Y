"use strict";

// Q7: Login Form Validation using RegExp
const loginForm = document.getElementById("loginForm");
const usernameRegex = /^.{5,}$/;
const passwordRules = [
    { regex: /.{8,}/, message: "Password must be at least 8 characters long." },
    { regex: /[A-Z]/, message: "Password must include an uppercase letter." },
    { regex: /[a-z]/, message: "Password must include a lowercase letter." },
    { regex: /\d/, message: "Password must include a number." },
    { regex: /[^A-Za-z0-9\s]/, message: "Password must include a special character." }
];

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const result = document.getElementById("result");

    usernameError.textContent = usernameRegex.test(username)
        ? ""
        : "Username must contain at least 5 characters.";

    const passwordErrors = passwordRules
        .filter(rule => !rule.regex.test(password))
        .map(rule => rule.message);
    passwordError.textContent = passwordErrors.join(" ");

    if (usernameError.textContent || passwordErrors.length) {
        result.textContent = "Please fix the errors above.";
        result.style.color = "#b00020";
        console.log("Login validation failed.");
    } else {
        result.textContent = "Validation successful.";
        result.style.color = "#16803c";
        console.log("Login fields passed validation.");
    }
});
