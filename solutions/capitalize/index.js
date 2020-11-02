// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {}

// mario's solution #1
// function capitalize(str) {
//     return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
// }

// mario's solution #2
// function capitalize(str) {
//     const words = [];
//     for (const word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(' ');
// }

// mario's solution #3
// function capitalize(str) {
//     let result = str[0].toUpperCase();
//     for (let i = 1; i < str.length; i++) {
//         result += str[i - 1] === ' ' ? str[i].toUpperCase() : str[i];
//     }
//     return result;
// }

module.exports = capitalize;
