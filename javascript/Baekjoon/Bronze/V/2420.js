// 사파리월드 (새싹)
// https://www.acmicpc.net/problem/2420

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');

console.log(Math.abs(Number(input[0]) - Number(input[1])));