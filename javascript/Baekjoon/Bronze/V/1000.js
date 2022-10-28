// A+B (새싹)
// https://www.acmicpc.net/problem/1000

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');

console.log(Number(input[0]) + Number(input[1]));