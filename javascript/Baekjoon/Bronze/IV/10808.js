// 알파벳 개수
// https://www.acmicpc.net/problem/10808

let input = require('fs').readFileSync('../../예제.txt').toString().split('');

let result = Array(26).fill(0);
for(let i = 0; i < input.length; i++) {
    result[input[i].charCodeAt(0) - 97]++;
}

console.log(result.join(' '));