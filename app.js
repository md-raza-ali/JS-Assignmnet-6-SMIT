// CHAPTER 35 TO 38

// ANSWER NO: 01
// function currentDate() {
//   let date = new Date();
//   document.write(date);
// }
// currentDate();

// ANSWER NO: 02
// function greet(firstName, lastName) {
//   let fullName = `${firstName} ${lastName}`;
//   alert("Hello " + fullName);
// }
// let firstName = prompt("Enter your first name..");
// let lastName = prompt("Enter your last name..");
// greet(firstName, lastName);

// ANSWER NO: 03
// function sum(num1, num2) {
//   let result = num1 + num2;
//   alert(result);
// }
// let num1 = +prompt("Enter first number..");
// let num2 = +prompt("Enter second number..");
// sum(num1, num2);

// ANSWER NO: 04
// function sum(num1, num2) {
//   let result = num1 + num2;
//   document.write(result);
// }
// function subtract(num1, num2) {
//   let result = num1 - num2;
//   document.write(result);
// }
// function multiply(num1, num2) {
//   let result = num1 * num2;
//   document.write(result);
// }
// function divide(num1, num2) {
//   let result = num1 / num2;
//   document.write(result);
// }
// let num1 = +prompt("Enter first number..");
// let operator = prompt(`Operation you want to perform  "+"  "-"  "*"  "/"`);
// let num2 = +prompt("Enter second number..");
// if (operator == "+") {
//   sum(num1, num2);
// } else if (operator == "-") {
//   subtract(num1, num2);
// } else if (operator == "*") {
//   multiply(num1, num2);
// } else if (operator == "/") {
//   divide(num1, num2);
// } else {
//   alert("Invalid operator!");
// }

// ANSWER NO: 05
// function sqr(num) {
//   let result = num * num;
//   alert(`Square is ${result}`);
// }
// let num = +prompt("Enter a number..");
// sqr(num);

// ANSWER NO: 06
// function fact(num) {
for (let i = 1; i <= num; i--) {
  var result = num * i;
  doucument.write(result);
}
// }
// fact(5);
