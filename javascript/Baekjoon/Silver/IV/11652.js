// 카드
// https://www.acmicpc.net/problem/11652

let input = require('fs').readFileSync('../../예제.txt').toString().split('\n').map(BigInt);

let arr = input.slice(1).sort((a, b) => String(a - b));
let tmp = arr[0];
let answer = arr[0];
let max = 0;
let cnt = 1;
let i = 1;
for(; i < arr.length; i++) {
    if(tmp !== arr[i]) {
        if(max < cnt) {
            max = cnt;
            answer = tmp;
        }
        cnt = 1;
        tmp = arr[i];
    } else {
        cnt++;
    }
}

if(max < cnt) {
    answer = arr[i - 1];
}

console.log(String(answer));