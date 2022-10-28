// 행렬 덧셈 (새싹)
// https://www.acmicpc.net/problem/2738

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');
let tmp = input.shift().split(' ');
let count1 = Number(tmp[0]);
let count2 = Number(tmp[1]);
let result = [];
let sub = [];

for(let i = 0; i < count1; i++) {
    tmp = input.shift().split(' ');
    sub = [];
    for(let j = 0; j < count2; j++) {
        sub.push(Number(tmp[j]));
    }
    result.push(sub);
}

for(let i = 0; i < count1; i++) {
    tmp = input.shift().split(' ');
    for(let j = 0; j < count2; j++) {
        result[i][j] += Number(tmp[j]);
    }
    result[i] = result[i].join(' ');
}

console.log(result.join('\n'));