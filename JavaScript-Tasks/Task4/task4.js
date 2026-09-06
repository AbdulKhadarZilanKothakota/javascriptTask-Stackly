// Task 1 — For Loop
// Print numbers from 1 to 10 using a for loop.

for(let a = 1; a <= 10; a++){
    console.log(a); 
}


//  Task 2 — Reverse Number
// Print numbers from 10 to 1 using a for loop.

for(let a = 10 ; a >= 1; a--){
    console.log(a);
}

// Task 3 — Even Numbers
// Print all even numbers from 1 to 20.

for(let a = 2 ; a <= 20; a += 2){
        console.log(a);   
}

//  Task 4 — Odd Numbers
// Print all odd numbers from 1 to 20.

for(let a = 1 ; a <= 20 ; a += 2){
    console.log(a);
}


// Task 5 — Multiplication Table
// Get a number from the user.
// Print its multiplication table from 1 to 10.

let number = Number(prompt("Enter Number : "));

for(let a = 1; a <= 10; a++){
    console.log(`${number} x ${a} = ${number * a}`);  
}

// While Loop
// Task 6 — Countdown
// Using while, print: 10 to 1

let a = 10;
while(a >= 1){
    console.log(a);
    a--;
}


// Task 7 — Sum of Numbers
// Using while, calculate:
// 1 + 2 + 3 + ... + 10
// Expected:
// 55

let num = 1;
let sum = 0;
while(num <= 10){
    sum = sum + num;
    num++;
}
console.log(sum);

// Do While
// Task 8 — Print Numbers
// Use do...while to print: 1 to 5

let num1 = 1
do{
    console.log(num1);
    num1++;
}
while(num1 <= 5);


/*
Task 9 — Do While Understanding
What is the output?
let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);
Important: Explain why the output occurs even though the condition is false.

a = 10
Enter the do block without checking the condition first
console.log(a) // prints 10
a++ i.e; a becomes 11
Check 11 <= 5 // false
Loop stops
Because a do...while loop always executes the code inside do at least once before checking the condition.
*/


// Task 10 — String Characters
// let name = "javascript";
// Print every character using for...of.

let name = "javascript";
for(let character of name){
    console.log(character); 
}


// Task 11 — Array Values
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];
// Use for...of to print every fruit.

let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for(let fruit of fruits){
    console.log(fruit);
}


// Task 12 — Student Names
// Create an array of 5 student names.
// Use for...of to print:

let names = ["Arun", "Priya", "Abdul", "Ganesh", "Sumanth"];
for(let name of names){
    console.log(`Student: ${name}`); 
}


// Task 13 — Employee Object
// Create employee Object and use for... in to print employees

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for(let emp in employee){
    console.log(emp, employee[emp]);
}


// Task 14 — Product Object

let productObject = {
    productName : "mobile",
    price : 20000,
    brand : "Samsung",
    category : "Smart Phone",
    stock : "Available"
}

for(let product in productObject){
    console.log(product, productObject[product]);
}


// Task 15 — Simple Function
// Create a function called welcome().
// It should print:
// Welcome to JavaScript
// Call the function 3 times.

function welcome(){
    console.log("Welcome to JavaScript");  
}
welcome();
welcome();
welcome();


// Task 16 — Function With Parameter

function greet(name) {
    // code
    console.log(`Hello ${name}`);  
}
greet("Naveen");
greet("Arun");
greet("Priya");


// Task 17 — Multiple Parameters
// Create a function:
// student(name, age, department)
// Print all three values.
// Call it with 3 different students.

function student(name, age, department){
    console.log(name, age, department);
    
}
student("Abdul", 26, "ECE");
student("koushik", 25, "Mech");
student("Chaithanya", 26, "CSE");


// Task 18 — Addition Function
// Create: function add(a, b)
// Expected:
// 30

function add(a, b) {
    // return result
    return a + b;
}

let result = add(10, 20);
console.log(result);


// Task 19 — Salary
// Create: function salary(amount) 
// Store the returned value in a variable and print it.

function salary(amount) {
    return amount;
}

let value = salary(2500);
console.log(value);


// Task 20 — Bonus Calculator
// Create: function bonus(salary, bonusAmount)
// Return: salary + bonusAmount

function bonus(salary, bonusAmount){
    return salary + bonusAmount;
}

let totalAmount = bonus(50000, 5000);
console.log(`Total = ${totalAmount}`);


// Task 21 -- Default Parameter
// Create:
// function employee(name, role = "Developer") {
//     // print name and role
// }
// Call:
// employee("Arun");
// employee("Priya", "Designer");
// Find the output.

function employee1(name, role = "Developer") {
    console.log(name, role);    
}
employee1("Arun");  // Arun Developer
employee1("Priya", "Designer");  // Priya Designer


// Task 22 — Named Function
// Create a named function:
// function square(number) {
//     return number * number;
// }
// Call it with 5 different numbers.

function square(number) {
    return number * number;
}
square(2);
square(7);
square(25);
square(10);
square(9);


// Task 23 — Anonymous Function
// Create an anonymous function and store it in a variable.
// Call it and print the result.

let calculate = function(a, b) {
    return a + b;
};

let result1 = calculate(2, 7);
console.log(result1);


// Task 24 — Arrow Function
// Create an arrow function that accepts two numbers and returns their multiplication.

let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(8, 8));

/*
// Task 25 — Predict the Output
function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);  //10 
        console.log(b);  //20
        console.log(c);  //30
    }

    console.log(a);  //10

    // let and const are block level scope . So we can't use out of the block
    // console.log(b);  //error  // task4.js:349 Uncaught ReferenceError: b is not defined at test
    // console.log(c);  //error  // // task4.js:349 Uncaught ReferenceError: b is not defined at test
}

test();

*/


/*
// Task 26 — Predict

console.log(a);  // undefined

var a = 10;   
What happens?  // var is hoisted.

// Task 27 -- Predict
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let declarations are also hoisted, but they remain in the Temporal Dead Zone (TDZ) until the declaration is reached.

let b = 20;

// Task 28 -- Predict
console.log(c); // ReferenceError: Cannot access 'c' before initialization

const c = 30;

const behaves like let regarding hoisting and the Temporal Dead Zone.
Then explain the difference between the three.

var is Hoisted and initialized with undefined
let and const are hoisted, but you cannot access them before their declaration because they are in the Temporal Dead Zone (TDZ).

*/

// Task 29 — Self Invoking Function
// Create an IIFE that immediately prints:
// Welcome to JavaScript
// Then create another IIFE that accepts:
// product
// discount
// and prints the discount message.

// First IIFE
(function () {
    console.log("Welcome to JavaScript");
})();

// Second IIFE
(function (product, discount) {
    console.log(product + " has a discount of " + discount + "%");
})("Laptop", 20);


// Task 30  Callback / Higher-Order Function
function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);  // welcome = callback function and execute = Higher-order Function

// welcome = Callback
// execute = Higher-Order Function
// Callback = function passed to another function.
// Higher-order function = function that accepts or returns another function.

// Understand which function is the callback and which function is the higher-order function.


//  Generator Function
// Task 31 — Cashback
// Create the generator object and print all values using for...of.

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let output = cashback();

for (let value of output) {
    console.log(value);
}


// Task 32 -- Final Task (Employee Management Console)

// Employee data
let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Rahul",
        age: 28,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }
];


// 1. for...of
// Print every employee

for (let employee of employees) {
    console.log(employee);
}


// 2. for...in
// Print each employee's keys and values

for (let employee of employees) {
    for (let key in employee) {
        console.log(key + ":", employee[key]);
    }
}


// 3 Function to display employee information

function displayEmployee(employee) {
    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);
}


// 4 Pass employee information to the function.

for (let employee of employees) {
    displayEmployee(employee);
}


// 5. Return
// Function that returns employee salary

function getSalary(employee) {
    return employee.salary;
}

for (let employee of employees) {
    let salary = getSalary(employee);
    console.log(employee.name, salary);
}


// 6. Condition
// Check salary >= 40000

for (let employee of employees) {

    if (getSalary(employee) >= 40000) {
        console.log(employee.name + " has salary >= 40000");
    } else {
        console.log(employee.name + " has salary < 40000");
    }
}


// 7. Arrow Function
// Simple calculation
let annualSalary = (salary) => {
    return salary * 12;
};


for (let employee of employees) {
    console.log(employee.name, annualSalary(employee.salary));
}


// 8. Generator
// Employee benefits
function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

console.log("Employee Benefits : ");

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log(benefit);
}

