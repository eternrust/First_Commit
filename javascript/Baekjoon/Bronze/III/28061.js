// 레몬 따기
// https://www.acmicpc.net/problem/28061

let input = require('fs').readFileSync('../../예제.txt').toString().trim().replace(/\r/g, '').split('\n');

let cnt = +input[0]
let arr = input[1].split(' ').map((v) => +v)
let result = 0;

for(let i = 0; i < cnt; i++) {
    console.log(result, arr[i])
    if(arr[i] >= result) {
        result = arr[i];
    } else {
        result--;
    }
}

console.log(result - 1);