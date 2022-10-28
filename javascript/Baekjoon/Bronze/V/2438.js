// 별 찍기 - 1 (새싹)
// https://www.acmicpc.net/problem/2438

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim();
let result = [];
let tmp = [];

for(let i = 0; i < Number(input); i++) {
    tmp = [];
    for(let j = 0; j <= i; j++) {
        tmp.push('*');
    }
    result.push(tmp.join(''));
}

console.log(result.join('\n'));