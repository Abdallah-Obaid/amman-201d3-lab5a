'use strict';
var a = Number(prompt('enter the first value'))
var b = Number(prompt('enter the secound value'))
var c = Number(prompt('enter the third value'))
function sum(a,b,c) { //eslint-disable-line
  var sum1= a+b+c
return(sum1)
}
sum(a,b,c)

function multiply(a,b,c) { //eslint-disable-line
  var multi= a*b*c
return(multi)
}
multiply(a,b,c)

/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here


function sumAndMultiply(a,b,c) { //eslint-disable-line

 return[sum(a,b,c),multiply(a,b,c),`${a} and ${b} and ${c} sum to ${sum(a,b,c)}.`,`The product of ${a} and ${b} and ${c} is ${multiply(a,b,c)}.`]
}                           
testSumAndMultiply();       
console.log(sumAndMultiply(4,7,5))
console.log(sumAndMultiply(a,b,c))


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////