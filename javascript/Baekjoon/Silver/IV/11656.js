// 접미사 배열
// https://www.acmicpc.net/problem/11656

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('');

let result = [];
let count = input.length;
for(let i = 0; i < count; i++) {
    result.push(input.slice(i, count).join(''));
}

result.sort();
console.log(result.join('\n'));