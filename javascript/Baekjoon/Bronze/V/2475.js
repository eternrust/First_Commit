// 검증수 (새싹)
// https://www.acmicpc.net/problem/2475

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');
let result = 0;

for(let i = 0; i < 5; i++) {
    result += Number(input[i]) * Number(input[i]);
}

console.log(result % 10);