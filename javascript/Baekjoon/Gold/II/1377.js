// 버블 소트
// https://www.acmicpc.net/problem/1377

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").split('\n').map(Number);

let count = input[0];
input = input.slice(1, count + 1).map((v, i) => {
    return {
        value: v,
        index: i
    }
}).sort((a, b) => a.value - b.value);

let max = 0;
for(let i = 0; i < count; i++) {
    max = Math.max(max, input[i].index - i)
}

console.log(max + 1)