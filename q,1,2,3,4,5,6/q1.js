'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
var username = prompt('Whats your name?')
var a = Number(prompt('enter the first value to be sum'))
var b = Number(prompt('enter the secound value to be sum'))
function sum(a, b) { //eslint-disable-line
  
var sum1= a+b

return[sum1,`The sum of ${a} and ${b} is ${a+b}.`]

}
// Here is the test for sum(); uncomment it to run it
testSum();
console.log(sum(4,7))
console.log(sum(a,b))

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////