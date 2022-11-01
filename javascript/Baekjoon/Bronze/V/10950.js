// A+B - 3 (새싹)
// https://www.acmicpc.net/problem/10950

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let count = Number(input.shift());
let result = [];
for(let i = 0; i < count; i++) {
    input[i] = input[i].split(' ').map(Number);
    result.push(input[i][0] + input[i][1]);
}

console.log(result.join('\n'));