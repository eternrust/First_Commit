// 네 수
// https://www.acmicpc.net/problem/10824

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');

console.log(Number(input[0] + input[1]) + Number(input[2] + input[3]))