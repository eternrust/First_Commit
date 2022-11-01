// 기찍 N
// https://www.acmicpc.net/problem/2742

let input = Number(require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim());

let result = [];

for(let i = input; i > 0; i--) {
    result.push(i);
}

console.log(result.join('\n'));