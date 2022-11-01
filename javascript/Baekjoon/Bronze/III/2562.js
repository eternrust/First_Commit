// 최댓값
// https://www.acmicpc.net/problem/2562

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

input = input.map(Number);
let max = Math.max.apply(null, input);

console.log(max, input.indexOf(max) + 1);