// 수 정렬하기 2
// https://www.acmicpc.net/problem/2751

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n').map(Number);
let cnt = input.shift();
console.log(input.sort((a, b) => a - b).join('\n'));