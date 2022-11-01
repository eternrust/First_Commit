// 상수
// https://www.acmicpc.net/problem/2908

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');

let num1 = Number(input[0].split('').reverse().join(''));
let num2 = Number(input[1].split('').reverse().join(''));

console.log(Math.max(num1, num2));