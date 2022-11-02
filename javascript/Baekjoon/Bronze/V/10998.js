// A×B (새싹)
// https://www.acmicpc.net/problem/10998

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ').map(Number);

console.log(input[0] * input[1]);