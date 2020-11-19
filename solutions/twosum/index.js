// ---Directions
// Given an array of integers nums and an integer
// target, return indices of the two numbers such
// that they add up to target.
// You may assume that each input would have exactly
// one solution, and you may not use the same element
// twice. Integers are not sorted.

// ---Examples
// twoSum([2, 7, 11, 15], 9); // [0, 1]
// twoSum([3, 2, 4], 6); // [1, 2]
// twoSum([3, 2, 3], 6); // [0, 2]

function twoSum(nums, target) {};

// mario's solution #1
// function twoSum(nums, target) {
//     let numsMap = {};
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (numsMap[complement] === undefined) {
//             numsMap[nums[i]] = i;
//         } else {
//             return [numsMap[complement], i]
//         }
//     }
// }

// aaron's solution
// function twoSum(nums, target) {
// 	const seenChars = new Map();
// 	for(let i = 0; i < nums.length; i++) {
// 		const num = nums[i];
// 		if(seenChars.has(num)) {
// 			return [seenChars.get(num), i]
// 		}
// 		seenChars.set(target - num, i);
// 	}
// };

// andrew's solution
// function twoSum(nums, target) {
//     for (let i = 0, len = nums.length; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if ((nums[i] + nums[j]) === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// eric's solution
// function twoSum(nums, target) {
//     let result = [];
//     nums.forEach((num, i) => {
//         for (let j = 0, len = nums.length; j < len; j++) {
//             if (num + nums[j] === target) {
//                 result = [j, i];
//                 break;
//             }
//         }
//     });
//     return result;
// };

module.exports = twoSum;