// Task1 -- Variables

var name = "abdul";
let age = 26;
var city = "Rayachoti";
const college = "Rgukt";

// Print all values
console.log("Name : ", name);
console.log("Age : ", age);
console.log("City : ", city);
console.log("College : ", college);

// change the var Value

name = "Khadar";
city = "Kadapa";

console.log("Changed Name : ",name);
console.log("Changed City : ",city);

// change let value
age = 25;
console.log("Changed Age : ", age);

// Try changing the const value
// college =  "IIIT Ap";  // Uncaught TypeError: Assignment to constant variable

// Try redeclaring each variable and observe what happens

var name = "Zilan";
// let age = 23;  // Identifier 'age' has already been declared
var city = "Andhra Pradesh";
// const college = "Rajiv Gandhi University";  // Identifier 'college' has already been declared


// Task2 -- Printing Statements

// prompt()
let empName = prompt("Enter employee Name : ");

// console.log()
console.log(empName);

// alert()
 alert("Welcome " + empName + "!");

 // confirm()
 confirm("Your Name is " + empName + ". Right?");

 // document.writeln()
 document.writeln("Thank You. " + empName);


//  // Task3 -- User Details

 let userName = prompt("Enter your Name : ");
 let userAge = Number(prompt("Enter Your Age : "));
 let userCity = prompt("Enter Your City : ");
 let userQualification = prompt("Enter Your Qualification : ");

 console.log("Name : " ,userName);
 console.log("Age : " ,userAge);
 console.log("City : " ,userCity);
 console.log("Qualification : " ,userQualification);


// Task4 -- Find Data Types

let value1 = "JavaScript";
let value2 = 100;
let value3 = 99.5;
let value4 = true;
let value5 = false;
let value6 = undefined;
let value7 = null;

console.log(value1, typeof(value1));
 
console.log(value2, typeof(value2));

console.log(value3, typeof(value3));
 
console.log(value4, typeof(value4));

console.log(value5, typeof(value5));

console.log(value6, typeof(value6));

console.log(value7, typeof(value7));

 
 
// Task5 -- Student Array

const students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First Student : ", students[0]);
console.log("Second Student : ", students[1]);
console.log("Last Student : ", students[students.length - 1]);
console.log("Total Students : ", students.length);


// // Task6 -- Employee Object

const employeeObject = {
   name : "Sumanth",
   age : 27,
   role : "React Developer",
   skills : ["HTML", "CSS", "JS", "REACT"],
   isWorking : true,
   qualification : ["B.Tech", "M-Tech"]
};

console.log("Employee Name : ", employeeObject.name);
console.log("Employee Age : ", employeeObject.age);
console.log("Employee Role : ", employeeObject.role);
console.log("Employee First Skill : ", employeeObject.skills[0]);
console.log("Employee Last Qualification : ", employeeObject.qualification[employeeObject.qualification.length-1]);
console.log("Working status : ", employeeObject.isWorking);


// // Task7 -- Calculator

let a = 20;
let b = 5;

console.log("Addition : ", a + b);
console.log("Subtraction : ", a - b);
console.log("Multiplication : ", a * b);
console.log("Division : ", a / b);
console.log("Modulus : ", a % b);
console.log("Exponential : ", a ** b);


// Task8 -- Shopping Bill

 let shirt = 999;
 let pant = 1499;
 let shoes = 1999;
 let bag = 799;

let result = shirt + pant + shoes + bag;
console.log("Total Price : ", result);


/*
//Task9 -- Increment & Decrement

//A
let a = 10;
let b = a++;

console.log(a); //11
console.log(b); //10

//B
let a = 10;
let b = ++a;

console.log(a); // 11
console.log(b); // 11

//C
let a = 10;
let b = a--;

console.log(a); // 9 
console.log(b); //10

//D
let a = 10;
let b = --a;

console.log(a); // 9
console.log(b); // 9
*/


// // Task10 -- Assignment Operator tasks

let num1 = 10;
num1 +=5;
console.log(num1); //15

let num2 = 10;
num2 -= 3;
console.log(num2);  //7

let num3 = 10;
num3 *= 2;
console.log(num3); //20

let num4 = 10;
num4 /= 4;
console.log(num4); //2.5

let num5 = 10;
num5 %= 3;
console.log(num5); //1

let num6 = 10;
num6 **= 2;
console.log(num6); //100


// // Task11 -- comparision Operator

console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(10 >= 10);  // true
console.log(10 <= 9);  // false

console.log(5 == "5");  // true
console.log(5 === "5");  // false

console.log(10 != "10");  // false
console.log(10 !== "10");  // true

 
// // Task12 -- AND

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); // false
console.log(false && false); //false

// // Task13 -- OR

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); // true
console.log(false || false); //false

// // Task14 -- NOT

console.log(!true); //false
console.log(!false); //true
console.log(!(5 > 10)); // true
console.log(!(10 > 5)); //false


// // Task15 -- Combination

console.log("=== Task15 ====");


console.log(5 == "5" && !(5 === 5) || 6 > 7); // false
console.log(10 > 5 && 8 < 12 || 4 === "4"); // true
console.log(7 === 7 && 10 != "10" || 5 >= 5); // true
console.log(15 < 10 || 20 > 15 && 5 == "5"); // true


// // Task16 -- Voting

let age2 = 20;

let result1 = ( age2 >= 18 ) ? "Eligible to vote" : "Not eligible";
console.log(result1);


// // Task17 -- Password

let password = true;

let result2 = password ? "Login Successful" : "Wrong Password";
console.log(result2);


// // Task18 -- User Introduction

let name1 = "Naveen";
let age1 = 25;
let city1 = "Trichy";

let result3 = "My name is " + name1 + ". I am " + age1 + " years old. I live in " + city1 + ".";
console.log(result3);

let result4 = `My name is ${name1}. I am ${age1} years old. I live in ${city1}.`;
console.log(result4);


// Task19 -- String Conversion

let res1 = String(100);
let res2 = String(true);
let res3 = String(undefined);
let res4 = String(null);
let res5 = String([1,2]);

console.log(res1, typeof(res1));
console.log(res2, typeof(res2));
console.log(res3, typeof(res3));
console.log(res4, typeof(res4));
console.log(res5, typeof(res5));


// // Task20 -- Number Conversion

console.log(Number());  //0
console.log(Number("")); //0
console.log(Number("123")); //123
console.log(Number("a1")); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0


// // Task21 -- Boolean Conversion

console.log(Boolean()); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); //true
console.log(Boolean(123)); // true
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean([])); //true
console.log(Boolean({})); // true


// Task22 -- Voting Eligibility

let personAge = Number(prompt("Enter Your age : "));

if(personAge >= 18){
   console.log("You can vote");
}else{
   console.log("You can't vote");
}


// Task23 --  Positive or Negative

let number = Number(prompt("Enter Number : "));

if(number > 0){
   console.log("Positive");
}
else if(number < 0){
   console.log("Negative");
}
else if(number === 0){
   console.log("Zero");
}
else{
   console.log("Enter Integer Numbers Only");
}


// Task24 -- Grade System

let marks = Number(prompt("Enter Your Marks : "));

if(marks <= 100 && marks >= 90){
   console.log("A Grade"); 
}
else if(marks < 90 && marks >= 80){
   console.log("B Grade"); 
}
else if(marks < 80 && marks >= 70){
   console.log("C Grade"); 
}
else if(marks < 70 && marks >= 60){
   console.log("D Grade"); 
}
else if(marks < 60 && marks >= 0){
   console.log("Fail"); 
}
else{
   console.log("Enter Marks between 0 to 100");
}


// Task25 -- Job Eligibility

let userAge1 = Number(prompt("Enter age : "));
let height = Number(prompt("Enter height in cms : "));
let weight = Number(prompt("Enter weight in kgs : "));

if(userAge1 >= 18){
   if(height >= 160){
      if(weight >= 60){
         alert("Congratulations! You are selected")
      }else{
         alert("Under Weight");
      }
   }else{
      alert("Under Height");   
   }
}else{
   alert("Under Age");
}


// Task26 -- Traffic Light

let light = prompt("Choose the colors : red, yellow and green");

switch(light){
   case "red" : alert("Stop"); break;
   case "yellow" : alert("Ready"); break;
   case "green" : alert("Go"); break;
   default : alert("Choose correct color!");
}


// // Task27 -- Day

let day = 1;

switch(day){
   case 1 : console.log("Monday"); break;
   case 2 : console.log("Tuesday"); break;
   case 3 : console.log("Wednesday"); break;
   case 4 : console.log("Thursday"); break;
   case 5 : console.log("Friday"); break;
   case 6 : console.log("Saturday"); break;
   case 7 : console.log("Sunday"); break;
   default : console.log("Invalid day");
}


// Task28 -- Student Result System

let studentDetails = {
   name : "Abdul",
   age : 26,
   city : "Rayachoty",
   qualification : "B.Tech",
   college : "RGUKT",
   subjects : {
      tamil : 89,
      hindi : 79,
      english : 71,
      maths : 95,
      social : 80
   }
}

// Get User details

console.log("Name : ", studentDetails.name);
console.log("Age : ", studentDetails.age);
console.log("City : ", studentDetails.city);

// Get Marks

console.log("Tamil : ", studentDetails.subjects.tamil);
console.log("English : ", studentDetails.subjects.english);
console.log("Maths : ", studentDetails.subjects.maths);

// Total Average

let totalMarks = studentDetails.subjects.tamil + 
                 studentDetails.subjects.hindi + 
                 studentDetails.subjects.english + 
                 studentDetails.subjects.maths + 
                 studentDetails.subjects.social;
let totalSubjects = Object.keys(studentDetails.subjects).length;


let average = totalMarks / totalSubjects;
console.log("Total Average : ", average);

// Check result

let grade;
if(average <= 100 && average >= 90){
   grade = "A";
}
else if(average <=90 && average >= 80){
   grade = "B";
}
else if(average <=80 && average >= 70){
   grade = "C";
}
else if(average <=70 && average >= 60){
   grade = "D";
}
else{
   grade = "Fail";
}

console.log("Result : ", grade);

// Check voting

let eligibility = studentDetails.age >= 18 ? "Eligible" : "Not Eligible";
console.log(eligibility);

// Display

let display = `Name : ${studentDetails.name}
Age : ${studentDetails.age}
City : ${studentDetails.city}
Total : ${totalMarks}
Average : ${average}
Grade : ${grade}               
Voting : ${eligibility}`;

console.log(display);


