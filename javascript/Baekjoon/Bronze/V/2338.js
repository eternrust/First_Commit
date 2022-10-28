// 긴자리 계산
// https://www.acmicpc.net/problem/2338

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

console.log((BigInt(input[0]) + BigInt(input[1])).toString());
console.log((BigInt(input[0]) - BigInt(input[1])).toString());
console.log((BigInt(input[0]) * BigInt(input[1])).toString());