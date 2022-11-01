// 사칙연산 (새싹)
// https://www.acmicpc.net/problem/10869

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');

input = input.map(Number);
let result = [];

result.push(input[0] + input[1]);
result.push(input[0] - input[1]);
result.push(input[0] * input[1]);
result.push(Math.floor(input[0] / input[1]));
result.push(input[0] % input[1]);

console.log(result.join('\n'));