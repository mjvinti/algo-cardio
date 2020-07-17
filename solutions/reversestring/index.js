// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('hello') === 'olleh'
//   reverse('there') === 'ereht'
//   reverse('apple') === 'leppa'
//   reverse('Greetings!') === '!sgniteerG'
// --- SPECIAL INSTRUCTIONS
// Do NOT use array reverse method helper
// Do NOT use 3rd party packages

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
};

// mario's solution #1
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// };

// mario's solution #2
// function reverse(str) {
//     let reversedStr = '';
//     for (const char of str) {
//         reversedStr = char + reversedStr;
//     }
//     return reversedStr;
// };

// eric's solution
// function reverse(str) {
//     return str.split('').reduce((acc, cur) => acc.unshift(cur) && acc, []).join('');
// };

// andrew's solution
// function reverse(str) {
//     return str.split('').map((_, i) => str[str.length - 1 - i]).join('')
// };

// aaron's solution
// function reverse(str) {
//     l = 0;
// 	r = str.length - 1;
// 	while (l < r) {
// 		let leftChar = str[l];
// 		let rightChar = str[r]
// 		str = replaceChar(str, l, rightChar);
// 		str = replaceChar(str, r, leftChar);
// 		l += 1;
// 		r -= 1;
// 	}
//     return str
// };
// function replaceChar(str, i, c) { // js not having something like str[3] = 'x' is criminal
// 	return str.substr(0, i) + c + str.substr(i + 1);
// }

module.exports = reverse;