// Q6: Prototype chain: Person -> Faculty -> Professor

// Base constructor
function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log(`Person name: ${this.name}`);
};

// Faculty inherits from Person.
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log(`Department: ${this.department}`);
};

// Professor inherits from Faculty.
function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log(`Subject: ${this.subject}`);
};

const professor1 = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "JavaScript"
);

// The object can access methods defined at each level of the chain.
professor1.introduce();       // Person.prototype
professor1.showDepartment(); // Faculty.prototype
professor1.showSubject();    // Professor.prototype

console.log(
    "Person prototype in chain:",
    Person.prototype.isPrototypeOf(professor1)
); // true

console.log(
    "Faculty prototype in chain:",
    Faculty.prototype.isPrototypeOf(professor1)
); // true

// Output:
// Person name: Dr. Sharma
// Department: Computer Science
// Subject: JavaScript
// Person prototype in chain: true
// Faculty prototype in chain: true
