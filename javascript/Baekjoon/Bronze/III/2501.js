// 약수 구하기
// https://www.acmicpc.net/problem/2501

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');

let num = Number(input[0]);
let count = Number(input[1]);
let cnt = 1;
let result = 0;

for(let i = 1; i <= num; i++) {
    if(num % i == 0) {
        if(cnt == count) {
            result = i;
            break;
        } else {
            cnt++;
        }
    }
}

console.log(result);