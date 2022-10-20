// 0의 개수
// https://www.acmicpc.net/problem/11170

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().toUpperCase().split('\n');

const getElNum = (arr, el) => arr.filter(v => v === el).length;
let count = Number(input.shift());
let result = [];
let num = 0;

for (let i = 0; i < count; i++) {
    num = 0;
    input[i] = input[i].split(' ');
    for (let j = Number(input[i][0]); j <= Number(input[i][1]); j++) {
        num += getElNum(j.toString().split(''),'0');
    }
    result.push(num);
}

console.log(result.join('\n'));