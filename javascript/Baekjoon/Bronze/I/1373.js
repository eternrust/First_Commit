// 2진수 8진수
// https://www.acmicpc.net/problem/1373

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim();

let result = '';
while(input.length >= 3) {
    result = parseInt(input.slice(-3), 2).toString(8) + result;
    input = input.slice(0, input.length-3);
}

console.log(input ? parseInt(input.slice(-3), 2).toString(8) + result : result);