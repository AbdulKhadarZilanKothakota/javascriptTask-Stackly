// Q1 --- differences between var, let and const

/*
1) Reassignment: var and let values can be updated, whereas const values are locked and cannot be reassigned.

2) Redeclaration: var allows you to re-declare the same variable in the same scope without error, but let and const will throw a syntax error

3) Scope: var is function-scoped (accessible outside the block it was created in), while let and const are block-scoped (strictly confined inside {}).

4) Hoisting: var variables are initialized as undefined when hoisted, while let and const are not initialized, creating a Temporal Dead Zone that throws a reference error if accessed early
*/


// Q2 -- Can you re-declare a variable with var? What about let and const?

/*
Yes, var can be re-declare. Because var is function-scoped (accessible outside the block it was created in)

when we re-declare let and const it throws an error , while let and const are block-scoped (Strictly confined inside the block{})
*/


// Q3 -- Output of below code
/*
``` javascript
var x = 5;
let y = 10;
const z = 15;

x = 20;  
y = 25;
z = 30;

console.log(x, y, z);
```
*/

// OutPut : 
// Uncaught TypeError: "" is not a function
// var and let can be reaasign the value but we can't reassign to const value. In above code we reassign for const so it throws an typeError



// Q4 -- What is the difference between declaring and initializing a variable?

/*
Declaration means creating a variable.
let age;  // age is declared

Initialization means giving the variable its first value.
age = 20; // initializing value 10 to age variable

*/

// Q5 -- OutPut of below code

let a;
console.log(a);  // undefined

// Q6 -- What is hoisting? Give an example

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope

// Example : 

console.log(num);  // undefined
var num = 10;

// javascript treats like below 
var num;
console.log(num);
num=10;

// Q7 -- What is the difference between null and undefined?

/*
Both null and undefined have "No value"
null -- we intentionally say there is no value like (let a = null;)
undefined -- a value has not been assigned. Value is missing (let a;)
*/

// Q8 -- Output for below code

console.log(typeof null); // object  -- typeof null returning "object" is a historical JavaScript behavior
console.log(typeof undefined);  // undefined
console.log(typeof []);  // object
console.log(typeof {});  // object

// Q9 -- What is the difference between == and ===?

/*
== operator is known as the loose equality operator. It compares two values for equality after performing type coercion, meaning it converts the values to the same type before comparing them
Example : 5 == "5" returns true (JavaScript converts "5" to a number)

=== operator is called the strict equality operator. It checks for equality without type conversion, meaning both the value and the type must be exactly the same for the comparison to return true.
Example :  5 === "5" returns false (one is a number and the other is a string)
*/

// Q10 -- What is the difference between ++i and i++?

// ++i — Pre-increment
// First increases the value, then uses it
// example : 
var i = 5;
console.log(++i); // 6

// i++ — Post-increment
// First uses the current value, then increases it
// example : 
var i = 5;
console.log(i++); // 5

// Q11 -- Output for below code

let x = 10;
let y = "5";

console.log(x + y); // 105  -- String concatination (String + number = String)
console.log(x - y); // 5  -- "5" into the number 5 (10 - 5 = 5)
console.log(x * y); // 50 -- "5" into the number 5 (10 * 5 = 50)
console.log(x / y);  // 2 -- "5" into the number 5 (10 / 5 = 2)


// Q12 -- What are logical operators? explain with examples

/*
&& -- AND : 
Both conditions must be true. If one condition is false then output will be false
Example : 5 > 3 && 10 > 5 // True

|| -- OR : 
At least one condition must be true. If Both conditions false only it will return false
Example : 5 > 10 || 10 > 5 // True

! -- NOT
Reverses true/false.
Example : !(5 > 3) output is false
          !(5 < 3) output is true

*/

// Q13 -- Output for below code 

console.log(5 > 3 && 10 > 5);  //true
console.log(5 > 10 || 10 > 5);  // true
console.log(!(5 > 3));  // false

// Q14 -- What is the ternary operator?

/*

Ternary Operator : The ternary operator is a short way of writing if-else
Syntax :  condition ? valueIfTrue : valueIfFalse;

Example : 
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);  // Adult

*/

// Q15 -- What is the difference between implicit and explicit type casting?

// implicit type casting happens automatically behind the scenes by the JavaScript engine
// explicit type casting occurs manually when you write specific functions to change a value's type


// Q16 -- Out for below code

console.log(Number("123"));  // 123
console.log(Number("hello")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Boolean(0));  // false
console.log(Boolean("hello"));  // true


// Q17 -- What is NaN? Give an example

// NaN means Not-a-Number : It happens when JavaScript tries to perform an invalid numeric operation

// Example : 
let num1 = Number("hello");

console.log(x);  // NaN


// Q18 -- What is the difference between if-else and switch?

/*
if-else :
Can check multiple variables across different blocks.
Useful when you have different conditions or ranges
Executes the final else block if all conditions fail.
 Only one chosen block ever executes

switch : 
Evaluates one single expression or variable throughout.
Useful when comparing one value against multiple fixed cases
Executes the default block if no case matches.
Requires explicit break or return keywords to avoid leaking into the next case
*/


// Q19 -- Output for below code

let age = 20;

if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Output : Adult


// Q20 -- What is nested if? Give an example

// nested if means putting one if statement inside another if(if statement inside another if statement)

// Example : 
let age1 = 20;
let isIndian = true;

if (age1 >= 18) {
    if (isIndian) {
        console.log("Entry allowed");
    }
}


// Q21 -- Program to check even or odd using ternary operator

let number = 17;

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);  // Odd


// Q22 -- What is the difference between while and do-while?

/*
While : 
1) It is checking condition at starting 
2) minimum iterations is zero at initially
3) Use a while loop when you want to execute code only if a specific condition is already met. If the condition is false right from the start, the loop body is skipped entirely

do-while : 
1) It is checking condition at Ending
2) minimum iterations is "one" . Atleast onces the code executes
3) Use a do...while loop when the block of code must run at least once, regardless of whether the condition is true or false. A common real-world use case is prompting a user for input until they provide valid data
*/


// Q23 -- Output for below code

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

/*
Output : 
1
2
3
4
5
*/


// Q24 -- What is the difference between for-of and for-in?

/*
for-of :
for-of gives you the values
primary target is Iterables (Arrays, Strings, Maps, Sets)
Returns the actual type of the value

for-in:
for-in gives you the keys/indexes
Primary target is Objects (enumerable properties)
Always returns keys as Strings

*/

// Q25 -- Write a program to find sum of numbers from 1 to 100.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

// Output : 5050


// Q26 -- What is the difference between slice and splice?

/*
slice() : 
1) Used to copy a portion of an array.
2) It does not change the original array.

splice() : 
1) Used to add, remove, or replace elements.
2) It changes the original array.
*/

// Q27 -- Output for Below code

let arr = [1, 2, 3];

arr.push(4); // [1, 2, 3, 4] -- adds value at last
arr.pop();  // [1, 2, 3] -- removes value at last
arr.unshift(0);  // [0, 1, 2, 3]  -- add value at starting
arr.shift(); // [1, 2, 3]  -- removes value at starting

console.log(arr);

// Output : [1, 2, 3]


// Q28 -- What is the difference between function declaration and function expression?

/*
function declaration :
1) Starts directly with the function keyword
2) fully hoisted
3) function name is mandatory

function expression : 
1) Typically assigned to a variable using const, let, or var
2) Not hoisted
3) function name is optional
*/


// Q29 --  What is an arrow function? Example

// An arrow function is a short and clean syntax for writing function expressions in JavaScript using the => arrow symbol. It removes the need to use the function keyword.

// Example : 
const add = (a, b) => {
    return a + b;
};
console.log(add(1,2)); // 3


// Q30 -- output for below code

function greet() {
    return "Hello";
}

let message = greet();

console.log(message);

// Output : Hello

