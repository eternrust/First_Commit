// -2진수
// https://www.acmicpc.net/problem/2089

let input = Number(require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim());

let result = [];
while(1) {
    let tmp = input;
    input = Math.ceil(input / -2);
    result.push(Math.abs(input * -2 - tmp));
    if(!Math.abs(input)) break;
}

console.log(result.reverse().join(''));