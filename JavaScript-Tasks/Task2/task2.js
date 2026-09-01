// //Task1 -- var, let, const

var studentName = "Abdul";
let studentAge = 26;
const collegeName = "RGUKT";

// // 1. print all three values
console.log(studentName, studentAge, collegeName);

// //2. Change the var value.
studentName = "Khadar";
console.log(studentName);

// //3. change the let value
studentAge = 25;
console.log(studentAge);

// // 4. Try changing const value and observe error
// // collegeName = "IIIT AP";  //Uncaught TypeError: Assignment to constant variable

// // 5. Try redeclaring the var value
var studentName = "Zilan";
console.log(studentName);

// // 6. Try redeclaring the let variable and observe error.
// // let studentAge = 24;      // SyntaxError: Identifier 'studentAge' has already been declared


// // Task2 -- User Information

let userName = prompt("Enter Your Name");
let userAge = prompt("Enter Your Age");
let userCity = prompt("Enter Your City");

console.log("Name : " , userName);
console.log("Age : " , userAge);
console.log("City : " , userCity);


// //Taks3 -- Welcome Message

userName = prompt("Enter your Name");  // I already declared userName above the same Variable name i am Using here.
alert("Welcome " + userName + "!");


// //Task4 -- Age Calculator

let birthYear = prompt("Please Enter Your birth Year");
let currentYear = prompt("Enter Current Year");
let age = currentYear - birthYear;
console.log("Age : " , age);


// // Task5 -- Identify Data Types

let str = "Hello";
let num1 = 100;
let num2 = 25.5;
let bool = true;
let bool1 = false;
let abc;
let xyz  = prompt("Click the Cancel Button");  // click the cancel button to get NULL value

console.log(typeof(str));
console.log(typeof(num1));
console.log(typeof(num2));
console.log(typeof(bool));
console.log(typeof(bool1));
console.log(typeof(abc));
console.log(xyz);           // it returns null value
console.log(typeof(xyz));  // typeof null returns "object" due to a historical JavaScript behavior.


// // Task6 -- Student Data

let studentData = {
    name : "Abdul",
    age : 26,
    city : "Rayachoty",
    qualification : "B.Tech",
    isStudent : true
}

console.log(studentData);
console.log(studentData.name);
console.log(studentData.age);
console.log(studentData.qualification);
console.log(studentData.isStudent);


// Task7 -- Fruit Array

let fruitContainer = ["Apple","Mango","Orange","Banana","Grapes","Papaya"];

console.log(fruitContainer[0]);
console.log(fruitContainer[1]);
console.log(fruitContainer[fruitContainer.length - 1]);
console.log(fruitContainer.length);


// Task8 -- Basic Calculator

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b); // 20*20*20*20*20


// Task9 --  Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let totalPrice = shirt+pant+shoes;

console.log("Total = " , totalPrice);


// Task10 -- Simple Marks Calculation

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil+english+maths;
let averageMarks = totalMarks/3;

console.log("Total Marks : ", totalMarks);
console.log("Average Marks : ", averageMarks);


/*

// Task11 --- Post Increment

// output values : 11 10
let a = 10;
let b = a++;

console.log(a);  //11
console.log(b);  //10


// Task12 --- Pre Increment

// output values : 11 11
let a = 10;
let b = ++a;

console.log(a);  //11
console.log(b);  //11


// Task13 --- Post Decrement

// output values : 19 20
let a = 20;
let b = a--;

console.log(a);  //19
console.log(b);  //20

// Task14 --- Pre Decrement

// output values : 19 19
let a = 20;
let b = --a;

console.log(a);  //19
console.log(b);  //19


// Task15 -- Find the Final Values

// Output Values : 7 4 7 5

let a = 5;
let b = a++;
let c = ++a;
let d = b--;

console.log(a);  //7
console.log(b);  //4
console.log(c);  //7
console.log(d);  //5

*/


// Task16 -- Assignment Operators

let number = 10;
number += 5;
console.log(number);  //15

let number1 = 10;
number1 -= 2;
console.log(number1);  //8

let number2 = 10
number2 *= 3;
console.log(number2);  //30

let number3 = 10;
number3 /= 2;
console.log(number3);  //5

let number4 = 10;
number4 %= 5;
console.log(number4);  //0

let number5 = 10;
number5 **= 3;
console.log(number5);  //10*10*10 = 1000


// Task17 -- Mini Student Profile

let sName = "Abdul";
let sAge = "26";
let sCity = "Rayachoty";
let sCollege = "Rgukt";

let favoriteSubjects = ["Tamil","Hindi","English","Maths","Science"];

let studentDetails = {
    name : sName,
    age : sAge,
    city : sCity,
    subjects : favoriteSubjects,
    isStudent : true
}


console.log("Student Name : ", studentDetails.name);
console.log("Student Age : ", studentDetails.age);
console.log("City : ", studentDetails.city);
console.log("First Subject : ", studentDetails.subjects[0]);
console.log("Last Subject : ", studentDetails.subjects[favoriteSubjects.length - 1]);
console.log("Total Subjects : ", studentDetails.subjects.length);
console.log(studentDetails);

// Final Challenge -- User + Calculator

let userNumber1 = Number(prompt("Enter Your First Number")); //assume 10
let userNumber2 = Number(prompt("Enter Your Second Number")); // assume 5

let add = userNumber1 + userNumber2;   
let sub = userNumber1 - userNumber2;
let mul = userNumber1 * userNumber2;
let div = userNumber1 / userNumber2;
let mod = userNumber1 % userNumber2;
let pow = userNumber1 ** userNumber2;

console.log("Addition : ", add); // 15
console.log("Subtraction : ", sub); // 5
console.log("Multiplication : ", mul); // 50
console.log("Division : ", div); // 2
console.log("Modulus : ", mod); // 0
console.log("Power : ", pow); // 100000


