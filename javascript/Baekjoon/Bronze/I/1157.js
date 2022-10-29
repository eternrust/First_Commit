// 단어 공부
// https://www.acmicpc.net/problem/1157

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().toUpperCase().split('');
let arr = new Array(26).fill(0);
let num = 0;
let char = '?';

for(let i = 0; i < input.length; i++) {
    arr[input[i].charCodeAt(0) - 65]++;
    if(arr[input[i].charCodeAt(0) - 65] == num) {
        char = '?';
    } else if(arr[input[i].charCodeAt(0) - 65] > num) {
        num++;
        char = input[i];
    }
}

console.log(char);