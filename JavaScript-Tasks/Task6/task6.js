// Task 1 -- Student Result Analyzer

const studentDetails = {
    name: "Abdul",
    department: "ECE",
    subjectMarks: {
        "Network Theory": 79,
        "Signals and Systems": 82,
        "Basic Electronics": 73,
        "Probability": 92,
        "Programming Language": 69
    }
};


// Calculate total marks
function calculateTotal() {

    let total = 0;

    const marks = Object.values(studentDetails.subjectMarks);

    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    return total;
}

const totalMarks = calculateTotal();

// Calculate average

const numberOfSubjects = Object.keys(studentDetails.subjectMarks).length;
const averageMarks = totalMarks / numberOfSubjects;


// Pass / Fail
function getResult(averageMarks) {

    if (averageMarks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}
const result = getResult(averageMarks);

// Grade
function getGrade(averageMarks) {

    if (averageMarks >= 90 && averageMarks == 100) {
        return "A";
    }
    else if (averageMarks >= 75) {
        return "B";
    }
    else if (averageMarks >= 60) {
        return "C";
    }
    else if (averageMarks >= 50) {
        return "D";
    }
    else {
        return "Fail";
    }
}

const grade = getGrade(averageMarks);


// Display
console.log("Student Name:", studentDetails.name);
console.log("Department:", studentDetails.department);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Result:", result);
console.log("Grade:", grade);


// Task 2 -- Employee Salary Calculator

const employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};


function calculateSalary(employee) {

    const basicSalary = employee.salary;
    console.log("Basic Salary:", basicSalary);

    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 15 / 100;
    }
    else if (employee.experience >= 2) {
        bonus = basicSalary * 10 / 100;
    }

    const finalSalary = basicSalary + bonus;
    
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);


// Task 3 -- Product Filter System

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];


// Products above ₹2,000
const productsAbove2000 = products.filter(product => {
    return product.price > 2000;
});
console.log("Products above 2000: ", productsAbove2000);

// Electronics products
const electronics = products.filter(product => {
    return product.category === "electronics";
});

console.log("Electronics:", electronics);

// First product below ₹1,000
const productBelow1000 = products.find(product => {
    return product.price < 1000;
});
console.log("First product below 1000:", productBelow1000);

// Total price
const totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);
console.log("Total price:", totalPrice);

// Any product above ₹50,000
const above50000 = products.some(product => {
    return product.price > 50000;
});
console.log("Any product above 50000:", above50000);


// Every product above ₹500
const above500 = products.every(product => {
    return product.price > 500;
});

console.log("Every product above 500:", above500);



// Task 4 -- Employee Management

const employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 45000
    },
    {
        id: 103,
        name: "Rahul",
        role: "Full Stack Developer",
        salary: 55000
    },
    {
        id: 104,
        name: "Priya",
        role: "UI/UX Designer",
        salary: 38000
    },
    {
        id: 105,
        name: "Divya",
        role: "Software Engineer",
        salary: 60000
    },
    {
        id: 106,
        name: "Vijay",
        role: "DevOps Engineer",
        salary: 50000
    }
];


// Display all employee names

const employeeNames = employees.map(employee => {
    return employee.name;
});

console.log("Employee Names:", employeeNames);


// Employees earning above ₹40,000

const highEarners = employees.filter(employee => {
    return employee.salary > 40000;
});

console.log("Employees earning above 40000:", highEarners);


// Find employee with ID 103

const id103 = employees.find(employee => {
    return employee.id === 103;
});

console.log("Employee with ID 103:", id103);


// Calculate total salary

const totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalSalary);


// Find highest-paid employee

const highestPaid = employees.reduce((highest, employee) => {

    if (employee.salary > highest.salary) {
        return employee;
    }

    return highest;

});

console.log("Highest Paid Employee:", highestPaid);


// Sort employees from highest salary to lowest

const sortedEmployees = [...employees].sort((a, b) => {
    return b.salary - a.salary;
});

console.log("Employees Sorted by Salary:", sortedEmployees);


// Create array containing only employee names

const names = employees.map(employee => {
    return employee.name;
});

console.log("Names:", names);



// Task 5 -- Shopping Cart

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];


function calculateCart(cart) {

    // Calculate total cart value
    const totalCartValue = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    console.log("Total Cart Value:", totalCartValue);

    // Calculate discount
    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 10 / 100;
    }
    console.log("Discount:", discount);

    // Calculate final amount
    const finalAmount = totalCartValue - discount;
    console.log("Final Payable Amount:", finalAmount);
}

calculateCart(cart);



// Task 6 -- Student Search System

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];


// Display all student names

const studentNames = students.map(student => {
    return student.name;
});

console.log("Student Names:", studentNames);


// Display students who scored above 80

const above80 = students.filter(student => {
    return student.mark > 80;
});

console.log("Students above 80:", above80);


// Find student named Priya

const priya = students.find(student => {
    return student.name === "Priya";
});

console.log("Student Priya:", priya);


// Calculate average mark

const totalMarks1 = students.reduce((total, student) => {
    return total + student.mark;
}, 0);

const averageMark = totalMarks1 / students.length;

console.log("Average Mark:", averageMark);


// Check whether anyone failed

const anyoneFailed = students.some(student => {
    return student.mark < 50;
});

console.log("Anyone Failed:", anyoneFailed);


// Check whether everyone scored above 40

const everyoneAbove40 = students.every(student => {
    return student.mark > 40;
});

console.log("Everyone scored above 40:", everyoneAbove40);


// Sort students by marks

const sortedStudents = [...students].sort((a, b) => {
    return b.mark - a.mark;
});

console.log("Students sorted by marks:", sortedStudents);



// Task 7 -- Array Transformation Challenge

const numbers = [12, 5, 8, 21, 44, 7, 30, 15];


//  Numbers × 2

const doubledNumbers = numbers.map(number => {
    return number * 2;
});

console.log("Doubled Numbers:", doubledNumbers);


// Even numbers

const evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);


// Numbers greater than 15

const greaterThan15 = numbers.filter(number => {
    return number > 15;
});

console.log("Numbers greater than 15:", greaterThan15);


// First number greater than 20

const firstGreaterThan20 = numbers.find(number => {
    return number > 20;
});

console.log("First number greater than 20:", firstGreaterThan20);


// Total of all numbers

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log("Total:", total);


// Any number greater than 40

const anyGreaterThan40 = numbers.some(number => {
    return number > 40;
});

console.log("Any number greater than 40:", anyGreaterThan40);


// Every number is positive

const allPositive = numbers.every(number => {
    return number > 0;
});

console.log("Every number is positive:", allPositive);


// Sort highest to lowest

const sortedNumbers = [...numbers].sort((a, b) => {
    return b - a;
});

console.log("Sorted numbers:", sortedNumbers);



// Task 8 -- String Analyzer

let sentence = prompt("Enter a sentence:");


// Total characters

console.log("Total characters:", sentence.length);


// Uppercase sentence

console.log("Uppercase:", sentence.toUpperCase());


// Lowercase sentence

console.log("Lowercase:", sentence.toLowerCase());


// Check whether it contains "JavaScript"

console.log("Contains JavaScript:", sentence.includes("JavaScript"));


// First character

console.log("First character:", sentence.slice(0, 1));


//  Last character

console.log("Last character:", sentence.slice(-1));


//  Number of words

const words = sentence.split(" ");

console.log("Number of words:", words.length);


// Replace JavaScript with Python

console.log("After replacement:", sentence.replace("JavaScript", "Python"));


//  Convert sentence into an array

console.log("Sentence array:", words);




// Final Mini Project -- Employee Dashboard

let employees1 = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// Employee List
function displayEmployees() {

    console.log("----- Employee List -----");

    employees1.forEach(employee => {
        console.log(
            employee.id,
            employee.name,
            employee.department,
            employee.salary,
            employee.experience
        );
    });
}

displayEmployees();


//  Search employee by name
function searchEmployee(name) {

    const employee = employees1.find(employee => {
        return employee.name.toLowerCase() === name.toLowerCase();
    });

    return employee;
}

console.log("----- Search Employee -----");
console.log(searchEmployee("Priya"));


//  Department Filter
function filterByDepartment(department) {

    const result = employees1.filter(employee => {
        return employee.department.toLowerCase() === department.toLowerCase();
    });

    return result;
}

console.log("----- IT Employees -----");
console.log(filterByDepartment("IT"));


//  Salary Filter
function salaryAbove50000() {

    const result = employees1.filter(employee => {
        return employee.salary > 50000;
    });

    return result;
}

console.log("----- Salary Above ₹50,000 -----");
console.log(salaryAbove50000());


// Total Company Salary
function calculateTotalSalary() {

    const totalSalary = employees1.reduce((total, employee) => {
        return total + employee.salary;
    }, 0);

    return totalSalary;
}

const totalSalary1 = calculateTotalSalary();

console.log("----- Total Company Salary -----");
console.log(totalSalary1);


//  Highest Salary
function findHighestSalary() {

    const highestPaid = employees1.reduce((highest, employee) => {

        if (employee.salary > highest.salary) {
            return employee;
        }

        return highest;

    });

    return highestPaid;
}

const highestPaid1 = findHighestSalary();

console.log("----- Highest Paid Employee -----");
console.log(highestPaid1);


//  Employees with more than 3 years experience
function experienceAbove3() {

    const result = employees1.filter(employee => {
        return employee.experience > 3;
    });

    return result;
}

console.log("----- Experience Above 3 Years -----");
console.log(experienceAbove3());


//  Sort Low → High
function sortSalaryLowToHigh() {

    return [...employees1].sort((a, b) => {
        return a.salary - b.salary;
    });
}

console.log("----- Salary Low → High -----");
console.log(sortSalaryLowToHigh());


//  Sort High → Low
function sortSalaryHighToLow() {

    return [...employees1].sort((a, b) => {
        return b.salary - a.salary;
    });
}

console.log("----- Salary High → Low -----");
console.log(sortSalaryHighToLow());


//  Statistics

const totalEmployees = employees1.length;

const averageSalary = totalSalary1 / totalEmployees;

console.log("----- Statistics -----");
console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + totalSalary1);
console.log("Highest Salary: ₹" + highestPaid1.salary);
console.log("Average Salary:", averageSalary);

