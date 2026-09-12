import React from "react";
function App() {


  // 1. VARIABLES
 //There are 3 types of variables in JavaScript: var, let, const
 // var: We can reassign and redeclare var.
 var userName = "Fatima";
 userName = "Amber";
 var userName = "Musfira";
 console.log("var:", userName);

 // let: We can reassign let but cannot redeclare it
 let age = 2;
 age = 20;
 console.log("let:", age);

 // const: We cannot reassign or redeclare const.
 const city = "Faisalabad";
 console.log("const:", city);
 // =====================================================
 // 2. DATA TYPES
 const name = "Fatima"; // String
 const studentAge = 18; // Number
 const isStudent = true; // Boolean
 const emptyValue = null; // Null
 let notAssigned; // Undefined
 console.log("Name:", name);
 console.log("Age:", studentAge);
 console.log("Student:", isStudent);
 console.log("Empty:", emptyValue);
 console.log("Undefined:", notAssigned);
//We can find the data types by using typeof operator
 console.log(typeof name);
 console.log(typeof studentAge);
 console.log(typeof isStudent);
 console.log(typeof emptyValue);
 console.log(typeof notAssigned);
 // =====================================================
 // 3. ARITHMETIC OPERATORS
 const num1 = 5;
 const num2 = 5;
 const addition = num1 + num2;
 const subtraction = num1 - num2;
 const multiplication = num1 * num2;
 const division = num1 / num2;
 const remainder = num1 % num2;
 const power = num1 ** 2;
 console.log("Addition:", addition);
 console.log("Subtraction:", subtraction);
 console.log("Multiplication:", multiplication);
 console.log("Division:", division);
 console.log("Remainder:", remainder);
 console.log("Power:", power);
 // =====================================================
 // 4. ASSIGNMENT OPERATORS
 let score = 20;
 score += 5;
 console.log("score += 5:", score);
 score -= 2;
 console.log("score -= 2:", score);
 score *= 2;
 console.log("score *= 2:", score);
 score /= 2;
 console.log("score /= 2:", score);
 // =====================================================
 // 5. COMPARISON OPERATORS
 const marks = 55;
 console.log("Greater:", marks > 50);
 console.log("Less:", marks < 50);
 console.log("Greater/equal:", marks >= 75);
 console.log("Less/equal:", marks <= 75);
 console.log("Equal:", marks === 75);
 console.log("Not equal:", marks !== 75);
 // =====================================================
 // 6. == VS ===
 console.log(5 == "5"); // true
 console.log(5 === "5"); // false
 // =====================================================
 // 7. LOGICAL OPERATORS
 const myAge = 25;
 const hasID = true;
 console.log( "AND:", myAge >= 18 && hasID);
 const isAdmin = false;
 const isTeacher = true;
 console.log( "OR:", isAdmin || isTeacher);
 const loggedIn = true;
 console.log( "NOT:", !loggedIn);
// =====================================================
// 8. INCREMENT / DECREMENT
 let counter = 1;
 counter++;
 console.log("Increment:", counter);
 counter++;
 console.log("Increment:", counter);
 counter--;
 console.log("Decrement:", counter);
 // =====================================================
 // RETURN JSX
 return (
 <div>
 <h1> JavaScript + React Basics </h1>
 <h2> Variables </h2>
 <p> Name: {name} </p>
 <p> Age: {studentAge} </p>
 <h2> Arithmetic Operators </h2>
 <p> Addition: {addition} </p>
 <p> Subtraction: {subtraction} </p>
 <p> Multiplication: {multiplication} </p>
 <p> Division: {division} </p>
 <p> Remainder: {remainder} </p>
 </div>
 );
}
export default App