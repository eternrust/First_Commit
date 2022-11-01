// 알람 시계
// https://www.acmicpc.net/problem/2884

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ').map(Number);

if(input[1] < 45) {
    input[0] = (input[0] + 23) % 24;
    input[1] = input[1] + 15;
} else {
    input[1] = input[1] - 45;
}
console.log(input[0], input[1]);