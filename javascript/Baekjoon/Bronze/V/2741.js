// N 찍기 (새싹)
// https://www.acmicpc.net/problem/2741

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim();
let count = Number(input);
let result = [];

for(let i = 1; i <= count; i++) {
    result.push(i);
}

console.log(result.join('\n'));