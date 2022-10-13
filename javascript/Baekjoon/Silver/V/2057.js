// 팩토리얼 분해
// https://www.acmicpc.net/problem/2057

let input = require('fs').readFileSync('../../예제.txt').toString();

let num = BigInt(input);
let factorial = 2432902008176640000n;

if(!num) num = -1;

for(let i = 20; i > 0; i--) {
    factorial = BigInt(factorial) / BigInt(i);
    if(BigInt(num) >= BigInt(factorial)) {
        num = BigInt(num) - BigInt(factorial);
    }
}

console.log(Number(num) ? "NO" : "YES");