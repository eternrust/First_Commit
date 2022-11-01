// 음계
// https://www.acmicpc.net/problem/2920

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');

input = input.map(Number);
let tmp = input[0] - input[1];
let result = '';

if(tmp == -1) {
    result = 'ascending';
} else {
    result = 'descending';
}

for(let i = 1; i < 7; i++) {
    if(tmp !== input[i] - input[i + 1]) {
        result = 'mixed';
    }
}

console.log(result);