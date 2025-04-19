// Exercise 1: Even or Odd Checker
let number1 = prompt("Exercise 1 - Enter a number:");
if (number1 % 2 === 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}

// Exercise 2: Basic Calculator
let num1 = parseFloat(prompt("Exercise 2 - Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter second number:"));
let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  result = "Invalid operator!";
}
alert("Result: " + result);

// Exercise 3: Voting Eligibility Checker
let age = prompt("Exercise 3 - Enter your age:");
if (age >= 18) {
  alert("You are eligible to vote.");
} else {
  alert("You are not eligible to vote yet.");
}

// Exercise 4: Print Numbers from 1 to 10
console.log("Exercise 4 - Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exercise 5: Multiplication Table Generator
let numTable = prompt("Exercise 5 - Enter a number for multiplication table:");
console.log(`Multiplication Table for ${numTable}`);
for (let i = 1; i <= 12; i++) {
  console.log(`${numTable} x ${i} = ${numTable * i}`);
}

// Exercise 6: Grade Checker
let score = prompt("Exercise 6 - Enter your score (0-100):");
if (score >= 70 && score <= 100) {
  alert("Excellent");
} else if (score >= 50 && score < 70) {
  alert("Good");
} else {
  alert("Needs Improvement");
}

// Exercise 7: Guess the Number Game
let randomNumber = Math.floor(Math.random() * 5) + 1;
let guess = prompt("Exercise 7 - Guess a number between 1 and 5:");
if (parseInt(guess) === randomNumber) {
  alert("You guessed right!");
} else {
  alert(`Wrong guess. The number was ${randomNumber}`);
}

// Exercise 8: FizzBuzz
console.log("Exercise 8 - FizzBuzz from 1 to 15:");
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
