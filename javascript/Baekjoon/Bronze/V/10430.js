// 나머지
// https://www.acmicpc.net/problem/10430

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');

let result = [];
input = input.map(Number);
result.push((input[0] + input[1]) % input[2]);
result.push(((input[0] % input[2]) + (input[1] % input[2])) % input[2]);
result.push((input[0] * input[1]) % input[2]);
result.push(((input[0] % input[2]) * (input[1] % input[2])) % input[2]);
console.log(result.join('\n'));