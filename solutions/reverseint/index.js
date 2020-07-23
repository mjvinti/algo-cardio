// --- Directions
// Given an integer, return an integer that is the reverse
// order of the number provided.
// --- Examples
//   reverseInt(17) === 71
//   reverseInt(981) === 189
//   reverseInt(100) === 1
//   reverseInt(-17) === -71
//   reverseInt(-20) === -2

function reverseInt(n) {
    return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
};

// mario's solution
// function reverseInt(n) {
//     return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
// };

// eric's solution
// function reverseInt(n) {
//     return /(-?)(\d+)/.test(n) && +`${ RegExp.$1 }${ RegExp.$2.split('').reverse().join('') }`;
// };

// andrew's solution
// function reverseInt(n) {
//     const isNegative = n < 0;
//     return Number(`${isNegative ? '-' : ''}${String(Math.abs(n)).split('').reverse().join('')}`)
// };

// aaron's solution
// function reverseInt(n) {
// 	if (typeof n !== "number") return;
// 	const isNeg = n < 0 ? -1 : 1;
// 	numStr = isNeg ? (n * -1).toString() : n.toString();
//     l = 0;
// 	r = numStr.length - 1;
// 	while (l < r) {
// 		let leftChar = numStr[l];
// 		let rightChar = numStr[r]
// 		numStr = replaceChar(numStr, l, rightChar);
// 		numStr = replaceChar(numStr, r, leftChar);
// 		l += 1;
// 		r -= 1;
// 	}
//     return parseInt(numStr, 10) * isNeg;
// };
// function replaceChar(numStr, i, c) {
// 	return numStr.substr(0, i) + c + numStr.substr(i + 1);
// }

module.exports = reverseInt;