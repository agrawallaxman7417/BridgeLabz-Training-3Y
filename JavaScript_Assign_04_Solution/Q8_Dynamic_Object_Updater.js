"use strict";

// Q8: Dynamic Object Updater
const user = { name: "John", email: "john@mail.com", age: 21 };
const userForm = document.getElementById("userForm");
const userOutput = document.getElementById("userOutput");

// Populate the form from the starting object.
Object.entries(user).forEach(([key, value]) => {
    userForm.elements[key].value = value;
});

function displayUser() {
    userOutput.textContent = JSON.stringify(user, null, 2);
    console.log("Current user object:", user);
}

userForm.addEventListener("submit", event => {
    event.preventDefault();

    // Update the same object in place so its current values remain available to the page.
    user.name = userForm.elements.name.value.trim();
    user.email = userForm.elements.email.value.trim();
    user.age = Number(userForm.elements.age.value);

    displayUser();
});

displayUser();
