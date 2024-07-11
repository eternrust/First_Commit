let input = require('fs').readFileSync('../../예제.txt').toString().trim().split('\n').map((v) => v.split(' ').map(Number));

// 입력
// 6 8
// 1 2 2
// 1 5 7
// 2 3 2
// 2 4 3
// 2 5 1
// 5 4 7
// 4 3 1
// 4 6 7

// 인접 행렬
// let arr = Array.from({length: input[0][0] + 1}, (v) => Array(input[0][0] + 1).fill(0));
// let result = [];
// for(let i = 1; i <= input[0][1]; i++) {
//     arr[input[i][0]][input[i][1]] = input[i][2];
//     arr[input[i][1]][input[i][0]] = input[i][2];
// }
// for(let i = 1; i < arr.length; i++) {
//     let tmp = [`A[${i}]`];
//     for(let j = 1; j < arr[i].length; j++) {
//         if(arr[i][j] === 0) continue;
//         tmp.push(`(${j},${arr[i][j]})`);
//     }
//     result.push(tmp.join(' '));
// }
// console.log(result.join('\n'));


// 인접리스트
// let arr = Array.from({length: input[0][0] + 1}, () => Array(0));
// let result = [];
// for(let i = 1; i <= input[0][1]; i++) {
//     arr[input[i][0]].push([input[i][1], input[i][2]]);
//     arr[input[i][1]].push([input[i][0], input[i][2]]);
// }
// for(let i = 1; i < arr.length; i++) {
//     result.push(`A[${i}] ${arr[i].map((v) => `(${v[0]},${v[1]})`).join(' ')}`);
// }
// console.log(result.join('\n'));


// 간선 리스트
// let edge = []
// let arr = Array(input[0][0] + 1).fill(0);
// let result = [];
// for(let i = 1; i <= input[0][1]; i++) {
//     edge.push(input[i])
//     edge.push([input[i][1], input[i][0], input[i][2]])
// }
// edge.sort((a, b) => {
//     if(a[0] === b[0]) {
//         if(a[1] === a[1]) return a[2] - b[2];
//         return a[1] - b[1];
//     }
//     return a[0] - b[0];
// })
// for(let i = 0; i < edge.length; i++) {
//     arr[edge[i][0]]++;
// }
// for(let i = 1; i < arr.length; i++) {
//     arr[i] += arr[i - 1];
// }
// for(let i = 1; i < arr.length; i++) {
//     let tmp = [`A[${i}]`];
//     for(let j = arr[i - 1]; j < arr[i]; j++) {
//         tmp.push(`(${edge[i][1]},${edge[i][2]})`);
//     }
//     result.push(tmp.join(' '));
// }
// console.log(result.join('\n'));