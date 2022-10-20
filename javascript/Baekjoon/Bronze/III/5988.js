// 홀수일까 짝수일까
// https://www.acmicpc.net/problem/5988

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().toUpperCase().split('\n');

let count = Number(input.shift());
let result = [];

for (let i = 0; i < count; i++) {
    if (Number(BigInt(input[i]) % 2n)) {
        result.push('odd');
    } else {
        result.push('even');
    }
}

console.log(result.join('\n'));