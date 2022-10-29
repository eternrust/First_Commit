// 평균
// https://www.acmicpc.net/problem/1546

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');
let count = Number(input.shift());
input = input[0].split(' ').map((num) => Number(num));
let result = 0;
let max = Math.max.apply(null, input);

for(let i = 0; i < count; i++) {
    result += input[i] / max * 100;
}

console.log(result / count);