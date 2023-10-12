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
//   var result = 1;
//   for (let i = 1; i <= num; i++) {
//     result = result * i;
//   }
//   alert(result);
// }
// let num = +prompt("Enter a number..");
// fact(num);

// ANSWER NO: 07
// function count(startNum, endNum) {
//   for (let i = startNum; i <= endNum; i++) {
//     document.write(`${i}<br>`);
//   }
// }
// let startNum = +prompt("Enter starting number.."),
//   endNum = +prompt("Enter end number..");
// count(startNum, endNum);

// ANSWER NO: 08
// function hypo(base, perp) {
//   let squaredResult = (base * base) + (perp * perp);
//   let finalResult = Math.sqrt(squaredResult);
//   alert("Hypotenuse: " + finalResult);

// }
// let base = +prompt("Enter the base of Right angle traingle");
// let perp = +prompt("Enter the perpendicular of Right angle traingle");
// hypo(base, perp);

// ANSWER NO: 09
// function area(width, height) {
//   let area = width * height;
//   alert(area);
// }
// area(5,4);
// let width = 5;
// let height = 4;
// area(width, height);

// ANSWER NO: 10
// function palindrome(str) {
//   let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   let reversedStr = cleanStr.split("").reverse().join("");
//   return cleanStr === reversedStr;
// }
// let str = prompt("Enter string..");
// if (palindrome(str)) {
//   alert("This is a palindrome string.");
// } else {
//   alert("Not a palindrome..");
// }

// ANSWER NO: 11
