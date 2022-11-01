// 나머지
// https://www.acmicpc.net/problem/3052

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n').map((num) => Number(num) % 42);

let num = Array.from(new Set(input)).length;
console.log(num);