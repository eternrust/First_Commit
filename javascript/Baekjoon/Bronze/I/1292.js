// 쉡게 푸는 문제
// https://www.acmicpc.net/problem/1225

let input = require('fs').readFileSync('../../예제.txt').toString().split(' ');

let one = Number(input[0]);
let two = Number(input[1]);
let tmp = 0;
let answer = 0;

for(let i = 1; i <= 1000; i++) {
    for(let j = 1; j <= i; j++) {
        tmp++;
        if(one <= tmp && tmp <= two) {
            answer += i;
        }
        if(tmp >= two) {
            break;
        }
    }
    if(tmp >= two) {
        break;
    }
}

console.log(answer);