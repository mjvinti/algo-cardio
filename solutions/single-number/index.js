// --- Directions
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. 
// Note the same number can appear twice more then once.
// To test run 'jest single-number'
// --- Examples
//   singleNumber([1]) === 1
//   singleNumber([4, 1, 2, 1, 2]) === 4
//   singleNumber([2, 2, 1]) === 1
//   singleNumber([9, 8, 7, 9, 8]) === 7
// --- SPECIAL INSTRUCTIONS
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

/**
 * Finds a the number that does not twice. 
 * @param  {Array[Number]} array The array with all numbers in a pair but one
 * @return {Number}	The number that is not repeated
 */

function singleNumber(array) {};

// mario's solution #1
// function singleNumber(array) {
//     if (array.length === 1) {
//         return array[0];
//     }

//     let numMap = array.reduce((numMap, num) => {
//         numMap[num] = numMap[num] + 1 || 1;
//         return numMap;
//     }, {});

//     for (const num in numMap) {
//         if (numMap[num] === 1) {
//             return parseInt(num);
//         }
//     }
// };

// andrew's solution
// function singleNumber(array) {
//     let nums = {};
//     array.forEach((i) => {
//         if (!nums[i]) {
//             nums[i] = 0;
//         }
//         nums[i]++;
//     });
//     return Number(Object.keys(nums).find(key => nums[key] === 1));
// };


module.exports = singleNumber;
