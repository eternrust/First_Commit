// 맞았는데 왜 틀리죠?
// https://www.acmicpc.net/problem/15820

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

input[0] = input[0].split(' ');
let count1 = Number(input[0][0]);
let count2 = Number(input[0][1]);
let result = "Accepted";

for(let i = 1; i <= count1 && result == "Accepted"; i++) {
    input[i] = input[i].split(' ');
    if(input[i][0] !== input[i][1]) {
        result = "Wrong Answer";
    }
}

for(let i = count1 + 1; i <= count1 + count2 && result == "Accepted"; i++) {
    input[i] = input[i].split(' ');
    if(input[i][0] !== input[i][1]) {
        result = "Why Wrong!!!";
    }
}

console.log(result);