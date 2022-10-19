// 짝수를 찾아라
// https://www.acmicpc.net/problem/3058

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let count = Number(input[0]);
let result = 0;
let min = 0;
let data = 0;

for(let i = 1; i <= count; i++) {
    result = 0;
    min = 0;
    input[i] = input[i].split(' ');
    for(let j = 0; j < 7; j++) {
        data = Number(input[i][j]);
        if(data % 2 == 0 && data) {
            if(min == 0 || data < min) {
                min = data;
            }
            result += data;
        }
    }
    console.log(result, min);
}