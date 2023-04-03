// 문자열 분석
// https://www.acmicpc.net/problem/10820

let input = require('fs').readFileSync('../../예제.txt').toString().split('\n');

let result = [];
let tmp = []
for(let i = 0; i < input.length; i++) {
    char = input[i].replace(/\r*/g, "").split('');
    tmp = Array(4).fill(0);
    if(input[i] === '') continue;
    for(let j = 0; j < char.length; j++) {
        if(char[j] === ' ') {
            tmp[3]++;
        }
        else if(/[a-z]/.test(char[j])) {
            tmp[0]++;
        }
        else if(/[A-Z]/.test(char[j])) {
            tmp[1]++;
        }
        else if(/[0-9]/.test(char[j])){
            tmp[2]++;
        }
    }
    result.push(tmp.join(' '));
}

console.log(result.join('\n'));