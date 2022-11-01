// A+B - 5 (새싹)
// https://www.acmicpc.net/problem/10952

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let result = [];
let i = 0;
input[i] = input[i].split(' ').map(Number);
while(input[i][0] !== 0 && input[i][1] !== 0) {
    result.push(input[i][0] + input[i][1]);
    input[++i] = input[i].split(' ').map(Number);
}

console.log(result.join('\n'));