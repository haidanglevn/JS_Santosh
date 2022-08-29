'use strict';

/**
Complete the function sumOddNumbers such that it returns the sum of all the odd numbers
from the numbers parameter it receives.

/**
 * @param {number[]} numbers
 */
function sumOddNumbers(numbers) {
let sumOdd =0;
for (let i=0; i< numbers.length; i++) {
    if (numbers[i]%2 != 0) {
        sumOdd += numbers[i];
    }
}
return sumOdd;
}



// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
