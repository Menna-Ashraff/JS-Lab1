var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
let fullNameConfirmation = confirm("Welcome " + firstName + " " + lastName );

var birthYear =Number(prompt("Please enter your birth year:"));
var age =  new Date().getFullYear() - birthYear;

alert("Welcome " + firstName + " " + lastName + " you are " + age + " old");


alert("First release of a culculator that only has a summation feature. ");

var firstNumber = prompt("Enter the first number:");
var secondNumber = prompt("Enter the second number:");

var sum = parseFloat(firstNumber) + parseFloat(secondNumber);

alert( sum);