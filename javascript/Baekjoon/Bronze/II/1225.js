// 이상한 곱셈
// https://www.acmicpc.net/problem/1225

let input = require('fs').readFileSync('../../예제.txt').toString().split(' ');

let one = input[0].split('');
let two = input[1].split('');
let answer = 0;

for(let i = 0; i < one.length; i++) {
    for(let j = 0; j < two.length; j++) {
        answer += Number(one[i]) * Number(two[j]);
    }
}

console.log(answer);