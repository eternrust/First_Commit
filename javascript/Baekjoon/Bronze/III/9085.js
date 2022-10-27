// 더하기
// https://www.acmicpc.net/problem/9085

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let count = Number(input.shift());
let result = [];
let cnt = 0;
let tmp;

for(let i = 0; i < count; i++) {
    cnt = Number(input.shift());
    input[0] = input[0].split(' ');
    tmp = 0;
    for(let j = 0; j < cnt; j++) {
        tmp += Number(input[0][j]);
    }
    result.push(tmp);
    input.shift();
}

console.log(result.join('\n'));