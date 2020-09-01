// --- Directions
// Given an array and chunk size, split the array into many subarrays
// of the specified chunk size
// --- Examples
// arrayChunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// arrayChunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// arrayChunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// arrayChunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function arrayChunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
};

// mario's solution #1
// function arrayChunk(array, size) {
//     const chunked = [];

//     for (const element of array) {
//         const last = chunked[chunked.length - 1];
//         if (!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element)
//         }
//     }
//     return chunked;
// };

// mario's solution #2
// function arrayChunk(array, size) {
//     const chunked = [];
//     let index = 0;

//     while (index < array.length) {
//         chunked.push(array.slice(index, index + size));
//         index += size;
//     }

//     return chunked;
// };

// andrew's solution
// function arrayChunk(array, size) {
// 	return array.reduce(
// 		([ res, i ]) => (i >= array.length ? [ res, i ] : [ res.concat([ array.slice(i, i + size) ]), i + size ]),
// 		[ [], 0 ]
// 	)[0];
// }

// aaron's solution
// function arrayChunk(array, size) {
// 	res = []
// 	for(let i = 0; i < array.length; i++) {
// 		const val = array[i];
// 		const resIndex = Math.floor(i  / size);
// 		if (i % size === 0) {
// 			res[resIndex] = [val]
// 		} else {
// 			res[resIndex].push(val);
// 		}
// 	}
// 	return res
// };

module.exports = arrayChunk;
