'use strict';

/**
Complete the function sumPositiveNumbers such that it returns the sum of all positive numbers
from the numbers parameter it receives.

/**
 * @param {number[]} numbers
 */

/* function sumPositiveNumbers(numbers) {
let sumPos = 0;
for (let i=0; i< numbers.length; i++) {
    if (numbers[i]> 0) {
        sumPos += numbers[i];    
    }  
}
return sumPos;
}
 */

function sumPositiveNumbers(numbers) {
    let sumPos=0;
    numbers.forEach(function(number) {
        if (number >0) {
            sumPos += number; 
        }
    }
    )
    return sumPos;
}

// Sample usage - do not modify
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5
