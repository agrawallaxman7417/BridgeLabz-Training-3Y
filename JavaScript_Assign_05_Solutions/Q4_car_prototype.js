// Q4: Sharing a method through a constructor's prototype

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// This method is created only once and shared by all Car objects.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

// Both objects use the same function from Car.prototype.
console.log(
    "Method shared:",
    car1.getDetails === car2.getDetails
); // true

// Output:
// Brand: Toyota, Model: Fortuner
// Brand: Honda, Model: City
// Method shared: true
