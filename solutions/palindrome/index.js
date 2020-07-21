// --- Directions
// A palindrome is a string that forms the same word if it is
// reversed. Given a string, return true if the string is a
// palindrome; return false if it is not.
// --- Examples:
// palindrome("racecar") === true
// palindrome("notapalindrome") === false
//  --- SPECIAL INSTRUCTIONS
// INCLUDE spaces and punctuation in determining if a string
// is a palindrome.

function palindrome(str) {
    return str === str.split('').reverse().join('');
};

// eric and mario's solution
// function palindrome(str) {
//     return str === str.split('').reverse().join('');
// };

// mario's solution #2
// function palindrome(str) {
//     return str.split('').every((char, i) => char === str[str.length - i - 1]);
// };

// andrew's solution
// function palindrome(str) {
//     return str.split('').reduce((isPalindrome, c, i) => isPalindrome && str[str.length - 1 - i] === c, true);
// };

// aaron's solution
// function palindrome(str) {
//     if(typeof str !== "string") return false;
// 	let l = 0;
//     let r = str.length - 1;
// 	while (l < r) {
//         const leftChar = str[l];
//         const rightChar = str[r];
//         if (leftChar !== rightChar) {
//             return false;
//         }
//         l += 1;
//         r -= 1;
//     }
//     return true;
// }

module.exports = palindrome;