// --- Directions
// Given a string, return the alphanumeric character
// that is most commonly used in the string.
// --- Examples
// maxChar("abcdddddddddd") === "d"
// maxChar("bacon 1234444") === "4"

function maxChar(str) {
    const charMap = {};
    let maxChar = str[0];
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
        if (charMap[maxChar] < charMap[char]) {
            maxChar = char;
        }
    }
    return maxChar;
};

// mario's solution #1
// function maxChar(str) {
//     const charMap = {};
//     let max = 0;
//     let maxChar = '';
//     for (let char of str) {
//         charMap[char] ? charMap[char]++ : charMap[char] = 1;
//     }
//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// };

// mario's solution #2
// function maxChar(str) {
//     const charMap = {};
//     let maxChar = str[0];
//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1;
//         if (charMap[maxChar] < charMap[char]) {
//             maxChar = char;
//         }
//     }
//     return maxChar;
// };

// eric's solution
// function maxChar(str) {
//     return str
//         .split('')
//         .reduce((acc, c) => {
//             let counter = acc.find(elem => elem.char === c);
//             counter ? counter.count++ : acc.push({ char: c, count: 1});
//             return acc;
//         }, [])
//         .sort((a, b) => a.count < b.count ? 1 : -1)[0].char;
// };

// andrew's solution
// function maxChar(str) {
//     return Object.entries(
//       str
//         .split("")
//         .reduce(
//           (chars, c) => ({ ...chars, [c]: chars[c] ? chars[c] + 1 : 1 }),
//           {}
//         )
//     ).reduce(
//       ([topChar, topCount], [char, count]) =>
//         topCount > count ? [topChar, topCount] : [char, count],
//       ""
//     )[0];
// }

// aaron's solution
// function maxChar(str) {
// 	if (!str) return null;
// 	str = [...str].sort();
// 	let maxLength, curLength = 1;
// 	let res = str[0];
// 	for(let i = 1; i < str.length; i++) {
// 		const currentChar = str[i];
// 		if (currentChar == str[i - 1]) {
// 			curLength += 1;
// 			if (maxLength < curLength) {
// 				maxLength = curLength
// 				res = currentChar;
// 			}
// 		}
// 	}
// 	return res;
// };


module.exports = maxChar;