// 소수 찾기
// https://www.acmicpc.net/problem/1978

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let cnt = Number(input[0])
let arr = input[1].split(' ').map(Number);
let count = 0;

const isPrime = (n) => {
    if(n < 2) return 0;
    for(let i = 2; i * i<= n; i++) {
        if(n % i == 0) return 0;
    }
    return 1;
}

for(let i = 0; i < cnt; i++) {
    count += isPrime(arr[i]);
}

console.log(count);

/* 과거의 코드
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
*/