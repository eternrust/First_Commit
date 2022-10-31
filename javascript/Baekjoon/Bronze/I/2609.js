// 최대공약수와 최소공배수
// https://www.acmicpc.net/problem/2609

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');

let result = [];
let data1 = Number(input[0]);
let data2 = Number(input[1]);
let min = 0;
let max = 0;

for(let i = 1; i <= data1 && i <= data2; i++) {
    if(data1 % i == 0 && data2 % i == 0) {
        min = i;
    }
}

result.push(min);
min = data1;
max = data2;

do {
    if(min > max) {
        max += data2;
    } else if(min < max) {
        min += data1;
    }
} while(min !== max);

result.push(min);

console.log(result.join(' '));