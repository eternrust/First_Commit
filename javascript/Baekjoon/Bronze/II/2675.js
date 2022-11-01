// 문자열 반복
// https://www.acmicpc.net/problem/2675

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let count = Number(input.shift());
let result = [];
let tmp = [];

const Long = (count, char) => {
    let tmp = [];
    for(let i = 0; i < count; i++) {
        tmp.push(char);
    }
    return tmp.join('');
}

for(let i = 0; i < count; i++) {
    input[i] = input[i].split(' ');
    input[i][1] = input[i][1].split('');
    tmp = input[i][1].map((char) => Long(input[i][0], char));

    result.push(tmp.join(''));
}

console.log(result.join('\n'));