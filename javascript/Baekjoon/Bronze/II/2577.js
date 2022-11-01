// 숫자의 개수
// https://www.acmicpc.net/problem/2577

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n').map(Number);

let num = (input[0] * input[1] * input[2]).toString().split('').map(Number);
let arr = new Array(10).fill(0);

for(let i = 0; i < num.length; i++) {
    arr[num[i]]++;
}

console.log(arr.join('\n'));