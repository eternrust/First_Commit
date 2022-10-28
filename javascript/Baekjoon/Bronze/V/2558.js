// A+B - 2
// https://www.acmicpc.net/problem/2558

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

console.log(Number(input[0]) + Number(input[1]));