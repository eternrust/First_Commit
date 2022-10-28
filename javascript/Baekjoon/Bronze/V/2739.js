// 구구단 (새싹)
// https://www.acmicpc.net/problem/2739

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim();
let count = Number(input);
let result = [];

for(let i = 1; i <= 9; i++) {
    result.push(`${count} * ${i} = ${count * i}`);
}

console.log(result.join('\n'));