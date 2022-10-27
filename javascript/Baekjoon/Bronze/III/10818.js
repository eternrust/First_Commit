// 최소, 최대
// https://www.acmicpc.net/problem/10818

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let count = Number(input.shift());
input = input[0].split(' ');
let min = Number(input[0]);
let max = Number(input[0]);

for(let i = 1; i < count; i++) {
    if(Number(input[i]) < min) {
        min = Number(input[i]);
    }
    if(Number(input[i]) > max) {
        max = Number(input[i]);
    }
}

console.log(min, max);