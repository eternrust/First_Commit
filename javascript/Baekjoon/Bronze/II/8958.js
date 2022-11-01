// OX퀴즈
// https://www.acmicpc.net/problem/8958

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let count = Number(input.shift());
let result = [];
let tmp1 = 0;
let tmp2 = 0

for(let i = 0; i < count; i++) {
    input[i] = input[i].split('');
    tmp1 = 0;
    tmp2 = 0;

    for(let j = 0; j < input[i].length; j++) {
        if(input[i][j] === 'O') {
            tmp1 += ++tmp2;
        } else {
            tmp2 = 0;
        }
    }

    result.push(tmp1);
}

console.log(result.join('\n'));