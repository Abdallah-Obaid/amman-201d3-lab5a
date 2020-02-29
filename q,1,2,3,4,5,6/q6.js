'use strict';
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var a = Number(prompt('enter the first value to be multiplied'))
var b = Number(prompt('enter the secound value to be multiplied'))
var c = Number(prompt('enter the third value to be multiplied'))
var d = Number(prompt('enter the first value to be multiplied'))
var e = Number(prompt('enter the secound value to be multiplied'))
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line
function multiply(testDynamicArray) { //eslint-disable-line
var multi=1
 for (var i = 0; i<testDynamicArray.length ; i++) {
multi=multi*testDynamicArray[i]

}
return(multi)
}
function multiplyAnyArray(testDynamicArray) { //eslint-disable-line
return[multiply(testDynamicArray),`The numbers ${testDynamicArray[0]},${testDynamicArray[1]},${testDynamicArray[2]},${testDynamicArray[3]},${testDynamicArray[4]} have a product of ${multiply(testDynamicArray)}.` ];
}                             
// // Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray();
console.log(multiplyAnyArray(testDynamicArray))
var testDynamicArray1=[a,b,c,d,e]
console.log(multiplyAnyArray(testDynamicArray1))
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
console.log(`Thanks ${username} for opening the learning-journal 9 for me (:`)
alert('Please check the console')