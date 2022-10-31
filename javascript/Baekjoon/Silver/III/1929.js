// 소수 구하기
// https://www.acmicpc.net/problem/1920
// 에라토스테네스의 체 사용함

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');

let result = [];
let arr = new Array(1000001).fill(0);

for(let i = 2; i <= Number(input[1]); i++) {
    arr[i] = i;
}

for(let i = 2; i <= Number(input[1]); i++) {
    if(arr[i] == 0) continue;

    for(let j = 2*i; j <= Number(input[1]); j += i) {
        arr[j] = 0;
    }
}

for(let i = Number(input[0]); i <= Number(input[1]); i++) {
    if(arr[i]) result.push(arr[i]);
}

console.log(result.join('\n'));