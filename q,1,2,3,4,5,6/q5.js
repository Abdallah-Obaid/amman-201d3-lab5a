'use strict';
var a = Number(prompt('enter the first value to be multiplied'))
var b = Number(prompt('enter the secound value to be multiplied'))
var c = Number(prompt('enter the third value to be multiplied'))
var testArray = [2,3,4]

function multiply(testArray) { //eslint-disable-line
var multi= testArray[0]*testArray[1]*testArray[2]
return(multi)
}

/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray) { //eslint-disable-line
    return[multiply(testArray),`The numbers ${testArray[0]},${testArray[1]},${testArray[2]} have a product of ${multiply(testArray)}.`]
}    
// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray();
console.log(multiplyArray(testArray))
var testArray1=[a,b,c]
function multiplyArray1(testArray1) { //eslint-disable-line
    return[multiply(testArray1),`The numbers ${testArray1[0]},${testArray1[1]},${testArray1[2]} have a product of ${multiply(testArray1)}.`]
} 
console.log(multiplyArray1(testArray1))
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////