// 진법 변환
// https://www.acmicpc.net/problem/2745

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');

let cnt = Number(input[1])
let result = input[0].split('')
.reduce((acc, cur, idx) => {
    if(/[A-Z]/.test(cur)) {
        return acc = acc * cnt + cur.codePointAt(0) - 55;
    }
    return acc = acc * cnt + Number(cur);
}, 0);

console.log(result)


/* 효율적이지 못한 코드
let result = 0;

let cnt = Number(input[1])
let char = input[0].split('').map((v) => {
    if(/[A-Z]/.test(v)) {
        return v.codePointAt(0) - 55;
    }
    return Number(v);
}).reverse();

for(let i = 0; i < char.length; i++) {
    result += char[i] * Math.pow(cnt, i);
}

console.log(result)
*/