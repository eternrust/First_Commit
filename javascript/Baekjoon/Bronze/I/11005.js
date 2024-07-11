// 진법 변환 2
// https://www.acmicpc.net/problem/11005

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ').map(Number);
let result = [];

while(input[0]) {
    let tmp = Math.ceil(input[0] % input[1]);
    input[0] = Math.floor(input[0] / input[1]);
    if(tmp >= 10) {
        tmp = String.fromCodePoint(tmp + 55);
    }
    result.push(tmp);
}

console.log(result.reverse().join(''));