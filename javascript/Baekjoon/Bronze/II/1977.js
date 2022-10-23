// 완전제곱수
// https://www.acmicpc.net/problem/1977

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let num1 = Number(input.shift());
let num2 = Number(input.shift());
let result = 0;
let min = 0;

for(let i = num1; i <= num2; i++) {
    if(Math.sqrt(i) == Math.floor(Math.sqrt(i))) {
        result += i;
        if(min == 0) {
            min = i;
        }
    }
}

if(result) {
    console.log(result);
    console.log(min);
} else {
    console.log(-1);
}