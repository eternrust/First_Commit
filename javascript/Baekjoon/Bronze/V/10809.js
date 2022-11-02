// 알파벳 찾기 (새싹)
// https://www.acmicpc.net/problem/10809

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('');
let arr = new Array(26).fill(-1);
let tmp = 0;

for(let i = 0; i < 26; i++) {
    tmp = input.indexOf(String.fromCharCode(i + 97));
    if (tmp != -1) {
        arr[i] = tmp;
    }
}

console.log(arr.join(' '));