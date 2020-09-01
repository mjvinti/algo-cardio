// --- Directions
// Given two strings, write a function to determine if the
// second string is an anagram of the first. An is a word,
// phrase, or name formed by rearranging the letter of
// another, such as cinema, formed from iceman.
// --- Examples
// anagram('rail safety', 'fairy tales') --> True
// anagram('RAIL! SAFETY!', 'fairy tales') --> True
// anagram('Hello there', 'Goodbye there') --> False
// anagram('', '') --> True
// anagram('aaz', 'zza') --> False
// anagram('rat', 'car') --> False
// anagram('awesome', 'awesom') --> False
// --- SPECIAL INSTRUCTIONS
// Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case

function anagram(stringA, stringB) {
    const aRegex = cleanStr(stringA);
    const bRegex = cleanStr(stringB);

    if (aRegex.length !== bRegex.length) {
        return false
    };

    aCharMap = buildCharMap(aRegex);
    bCharMap = buildCharMap(bRegex);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (const char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    
    return true;
};

function buildCharMap(str) {
    const charMap = {};

    for (const char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

function cleanStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase();
}

// mario's solution #1 
// function anagram(stringA, stringB) {
//     const aRegex = cleanStr(stringA);
//     const bRegex = cleanStr(stringB);

//     if (aRegex.length !== bRegex.length) {
//         return false
//     };

//     aCharMap = buildCharMap(aRegex);
//     bCharMap = buildCharMap(bRegex);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for (const char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }
    
//     return true;
// };

// function buildCharMap(str) {
//     const charMap = {};

//     for (const char of str) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

// function cleanStr(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase();
// }

// mario's solution #2
// function anagram(stringA, stringB) {
//     return cleanStr(stringA) === cleanStr(stringB);
// }

// function cleanStr(str) {
//     return str
//         .replace(/[^\w]/g, '')
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('');
// }

module.exports = anagram;