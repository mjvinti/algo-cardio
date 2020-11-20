// --- Directions
// Write a function that accepts a positive integer N.
// The function should console log a step shape
// with N levels using the # character. Make sure the
// step has spaces on the right hand side.
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {}

// mario's solution #1
// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('#'.repeat(i) + ' '.repeat(n - i));
//     }
// }

// mario's solution #2
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let step = '';
//         for (let column = 0; column < n; column++) {
//             step = column <= row ? '#' : ' ';
//         } 
//         console.log(step);
//     }
// }

// mario's solution #3
// function steps(n, row = 0, step = '') {
//     if (n === row) {
//         return;
//     }
//     if (n === step.length) {
//         console.log(step);
//         return steps(n, row + 1);
//     }
//     step += step.length <= row ? '#' : ' ';
//     steps(n, row, step);
// }

module.exports = steps;