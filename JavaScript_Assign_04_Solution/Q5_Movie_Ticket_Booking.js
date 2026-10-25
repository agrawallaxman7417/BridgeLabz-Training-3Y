"use strict";

// Q5: Movie Ticket Booking
const bookingForm = document.getElementById("bookingForm");
const ticketElement = document.getElementById("ticket");

const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seatsText = document.getElementById("seats").value.trim();
    const seats = Number(seatsText);
    const errors = {
        name: !nameRegex.test(name) ? "Enter a name using alphabets only." : "",
        email: !emailRegex.test(email) ? "Enter a valid email address." : "",
        seats: !/^\d+$/.test(seatsText) || seats < 1 || seats > 10
            ? "Choose a whole number of seats from 1 to 10."
            : ""
    };

    Object.entries(errors).forEach(([field, message]) => {
        document.getElementById(`${field}Error`).textContent = message;
    });

    if (Object.values(errors).some(Boolean)) {
        ticketElement.hidden = true;
        console.log("Booking validation failed:", errors);
        return;
    }

    const booking = { name, email, seats };
    ticketElement.hidden = false;
    ticketElement.textContent = `Booking confirmed\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
    console.log("Ticket booking:", booking);
});
