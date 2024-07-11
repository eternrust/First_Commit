// 더하기 사이클
// https://www.acmicpc.net/problem/1110

let input = Number(require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim());

let answer = input;
let tmp = 0
let result = 0;

do {
    tmp = input % 10;
    input = tmp * 10 + (Math.floor(input / 10) + tmp) % 10;
    result++;
} while(answer != input)

console.log(result);