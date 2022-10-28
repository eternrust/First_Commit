// 대수문자 바꾸기 (새싹)
// https://www.acmicpc.net/problem/2744

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('');

for(let i = 0; i < input.length; i++) {
    if(input[i] == input[i].toUpperCase()) {
        input[i] = input[i].toLowerCase();
    } else {
        input[i] = input[i].toUpperCase();
    }
}

console.log(input.join(''));