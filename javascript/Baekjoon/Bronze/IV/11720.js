// 숫자의 합
// https://www.acmicpc.net/problem/11720

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let count = Number(input[0]);
let num = input[1].split('');
let result = 0;

for(let i = 0; i < count; i++) {
    result += Number(num[i]);
}

console.log(result);