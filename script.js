function evenOrOdd() {
  let number1 = prompt("Enter a number:");
  if (number1 % 2 === 0) {
    alert("The number is even");
  } else {
    alert("The number is odd");
  }
}

function basicCalculator() {
  let num1 = parseFloat(prompt("Enter first number:"));
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
}

function votingChecker() {
  let age = prompt("Enter your age:");
  if (age >= 18) {
    alert("You are eligible to vote.");
  } else {
    alert("You are not eligible to vote yet.");
  }
}

function printNumbers() {
  console.log("Numbers from 1 to 10:");
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function multiplicationTable() {
  let numTable = prompt("Enter a number for multiplication table:");
  console.log(`Multiplication Table for ${numTable}`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${numTable} x ${i} = ${numTable * i}`);
  }
}

function gradeChecker() {
  let score = prompt("Enter your score (0-100):");
  if (score >= 70 && score <= 100) {
    alert("Excellent");
  } else if (score >= 50 && score < 70) {
    alert("Good");
  } else {
    alert("Needs Improvement");
  }
}

function guessGame() {
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  let guess = prompt("Guess a number between 1 and 5:");
  if (parseInt(guess) === randomNumber) {
    alert("You guessed right!");
  } else {
    alert(`Wrong guess. The number was ${randomNumber}`);
  }
}

function fizzBuzz() {
  console.log("FizzBuzz from 1 to 15:");
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
}
