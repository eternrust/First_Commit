// 알파벳 찾기
// https://www.acmicpc.net/problem/10809

let input = require('fs').readFileSync('../../예제.txt').toString().split('');

let result = Array(26).fill(-1);
for(let i = 0; i < input.length; i++) {
    if(result[input[i].charCodeAt(0) - 97] === -1) {
        result[input[i].charCodeAt(0) - 97] = i;
    }
}

console.log(result.join(' '));

/* 과거의 나
let arr = new Array(26).fill(-1);
let tmp = 0;

for(let i = 0; i < 26; i++) {
    tmp = input.indexOf(String.fromCharCode(i + 97));
    if (tmp != -1) {
        arr[i] = tmp;
    }
}

console.log(arr.join(' '));
*/