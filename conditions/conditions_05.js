"use strict";

/**
Write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works
(e.g. "The greater number of 5 and 10 is 10.").


/**
 * @param {numbers} 
 */

function greaterNum(num1, num2) {
  if (num1 > num2) {
    return "Greater number is " + num1;
  } else if (num2 > num1) {
    return "Greater number is " + num2;
  } else {
    return "Two numbers are equal";
  }
}

console.log(greaterNum(5, 10));
console.log(greaterNum(5, 5));
