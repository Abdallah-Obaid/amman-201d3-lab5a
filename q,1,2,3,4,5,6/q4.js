'use strict';
var a = Number(prompt('enter the first value to be sum'))
var b = Number(prompt('enter the secound value to be sum'))
var c = Number(prompt('enter the third value to be sum'))
var testArray = [2,3,4]
function sum(testArray) { //eslint-disable-line
var sum1=testArray[0]+testArray[1]+testArray[2]
return sum1
}


/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/
// Write your code here

function sumArray(testArray) { //eslint-disable-line
return[sum(testArray),`${testArray[0]},${testArray[1]},${testArray[2]} was passed in as an array of numbers, and ${sum(testArray)} is their sum.`]
}                 
testSumArray();
console.log(sumArray(testArray))

var testArray1 = [a,b,c]
function sumArray1(testArray1) { //eslint-disable-line
    return[sum(testArray1),`${testArray1[0]},${testArray1[1]},${testArray1[2]} was passed in as an array of numbers, and ${sum(testArray1)} is their sum.`]
    }                 
// Here is the test for sumArray(); uncomment it to run it

console.log(sumArray1(testArray1))


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////