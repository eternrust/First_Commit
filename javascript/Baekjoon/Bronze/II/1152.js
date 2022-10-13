// 단어의 개수
// https://www.acmicpc.net/problem/1152

let input = require('fs').readFileSync('../../예제.txt').toString().trim().split(' ');

if(input == '') console.log(0);
else console.log(input.length);
