// 소수 찾기
// https://www.acmicpc.net/problem/1920

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

const search = (num) => {
    if(num <= 1) return 0;
    for(i = 2; i < num; i++) {
        if(num % i == 0) {
            return 0;
        }
    }
    return 1;
}

let result = 0;
let count = Number(input[0]);
let tmp = input[1].split(' ').map(Number);

for(let i = 0; i < count; i++) {
    result += search(tmp[i]);
}

console.log(result);