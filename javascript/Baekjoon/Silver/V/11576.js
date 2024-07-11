// Base Conversion
// https://www.acmicpc.net/problem/11576

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let [first, last] = input[0].split(' ').map(Number);
let cnt  = Number(input[1])
let arr = input[2].split(' ').map(Number);

let result = 0;
for(let i = 0; i < cnt; i++) {
    result = result * first + arr[i]
}

let answer = [];
while(result) {
    let tmp = Math.ceil(result % last);
    result = Math.floor(result / last);
    answer.push(tmp);
}


console.log(answer.reverse().join(' '));