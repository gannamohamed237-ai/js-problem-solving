/*Question 1 =>
var name = prompt("Enter your name");
var age = Number(prompt("Enter your age"));
var birthYear = 2026 - age;
console.log("Hello " + name + "! You are " + age + " years old and you were born around " + birthYear);
*/



/*Question 2 =>
var egp = Number(prompt("Enter amount in EGP"));
var usdRate = 47.22;
var eurRate = 54.35;
var gbpRate = 61.95;
var usd = egp / usdRate;
var eur = egp / eurRate;
var gbp = egp / gbpRate;
console.log(
    egp + " EGP = $" + usd.toFixed(2) +
    " USD, €" + eur.toFixed(2) +
    " EUR, £" + gbp.toFixed(2) + " GBP"
);
*/




/*Question 3 =>

let num = Number(prompt("Enter a number"));

if (num % 2 == 0) {
    console.log(num + " is an even number");
} else {
    console.log(num + " is an odd number");
}
    */



/*Question 4 =>
let hour = Number(prompt("Enter the current hour (0-23):"));

if (hour >= 0 && hour <= 11) {
    console.log("Good morning!");
} 
else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon!");
} 
else {
    console.log("Good evening!");
}
*/



/*Question 5 =>
let score1 = Number(prompt("Enter first score"));
let score2 = Number(prompt("Enter second score"));
let score3 = Number(prompt("Enter third score"));
let average = (score1 + score2 + score3) / 3;
if (average >= 50) {
    console.log("Average: " + average.toFixed(2) + ", Status: Pass");
} else {
    console.log("Average: " + average.toFixed(2) + ", Status: Fail");
}
*/



/*Question 6 =>
let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let operator = prompt("Enter operator (+, -, *, /)");
let result;
switch (operator) {

    case "+":
        result = num1 + num2;
        break;

    case "-":
        result = num1 - num2;
        break;

    case "*":
        result = num1 * num2;
        break;

    case "/":
        result = num1 / num2;
        break;

    default:
        console.log("Invalid operator");
}
console.log(num1 + " " + operator + " " + num2 + " = " + result);
*/




/*Question 7 =>
let num = Number(prompt("Enter a number"));
for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(num + " * " + i + " = " + result);
}
*/


/*Question 8 =>
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
*/


/*Question 9 =>
let num =  Number(prompt("Enter the number"));
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}
console.log(factorial);
*/



/*Question 10 =>
let n = 1;
while (n * n <= 50) {
    n++;
}
console.log(n);
*/





/* Question 11 =>
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
console.log("Before swapping:");
console.log("a = " + a);
console.log("b = " + b);
let temp = a;
a = b;
b = temp;
console.log("After swapping:");
console.log("a = " + a);
console.log("b = " + b);
*/






/*Question 11 =>
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
console.log("Before swapping:");
console.log("a = " + a);
console.log("b = " + b);
a = a + b;
b = a - b;
a = a - b;
console.log("After swapping:");
console.log("a = " + a);
console.log("b = " + b);
*/







/*Question 12 =>
let age = Number(prompt("Enter your age"));
let hasTicket = prompt("Do you have a ticket? (yes/no)");
let canEnter = false;
if (age >= 18 || hasTicket == "yes") {
    canEnter = true;
}
console.log("Access granted: " + canEnter);
*/



/*Question 13 =>
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let c = Number(prompt("Enter third number"));
let largest;
if (a >= b) {
    if (a >= c) {
        largest = a;
    } else {
        largest = c;
    }
} else {
    if (b >= c) {
        largest = b;
    } else {
        largest = c;
    }
}
console.log("Largest number is: " + largest);
*/





/*Question 14 =>
let hours = Number(prompt("Enter hours worked"));
let rate = Number(prompt("Enter hourly rate"));
let regular;
let overtime = 0;
let total;
if (hours > 40) {
    regular = 40 * rate;
    overtime = (hours - 40) * rate * 1.5;
} else {
    regular = hours * rate;
}
total = regular + overtime;
console.log("Regular: $" + regular);
console.log("Overtime: $" + overtime);
console.log("Total: $" + total);
*/




/*Question 15 =>
let weight = Number(prompt("Enter your weight in kg"));
let height = Number(prompt("Enter your height in meters"));
let bmi = weight / (height * height);
if (bmi < 18.5) {
    console.log("BMI: " + bmi.toFixed(2) + " - Underweight");
}
else if (bmi < 25) {
    console.log("BMI: " + bmi.toFixed(2) + " - Normal weight");
}
else if (bmi < 30) {
    console.log("BMI: " + bmi.toFixed(2) + " - Overweight");
}
else {
    console.log("BMI: " + bmi.toFixed(2) + " - Obese");
}
*/




/*Question 16 =>
let amount = Number(prompt("Enter purchase amount"));
let tax = amount * 0.10;
let discount = 0;
if (amount > 100) {
    discount = amount * 0.05;
}
let finalPrice = amount + tax - discount;
console.log("Subtotal: $" + amount);
console.log("Tax: $" + tax);
console.log("Discount: $" + discount);
console.log("Final: $" + finalPrice);
*/


/*Question 17 =>
let currentBalance = 500;
let operation = prompt("Choose operation:(Balance , Withdraw , Deposit)");
let amount = Number(prompt("Enter amount"));
switch (operation) {
    case "Balance":
        console.log("Your balance is: $" + currentBalance);
        break;
    case "Withdraw":
        currentBalance = currentBalance - amount;
        console.log("New balance: $" + currentBalance);
        break;
    case "Deposit":
        currentBalance = currentBalance + amount;
        console.log("New balance: $" + currentBalance);
        break;
    default:
        console.log("Invalid operation");
}
        */



/*Question 18 =>
for (let i = 1; i <= 100; i++) {
if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
    */


/*Question 19 =>
let rows = Number(prompt("Enter number of rows"));
for (let i = 1; i <= rows; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
console.log(stars);
}
*/


/*Question 20 =>
let num = prompt("Enter a number");
let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
}
console.log("Sum of digits: " + sum);
*/