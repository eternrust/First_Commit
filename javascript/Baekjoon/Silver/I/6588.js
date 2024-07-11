// 골드바흐의 추
// https://www.acmicpc.net/problem/6588

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n').map(Number);

const isPrime = (n) => {
    let all = Array(n + 1).fill(0);
    for(let i = 2; i <= n; i++) {
        if(all[i]) continue;
        for(let j = i + i; j <= n; j += i) {
            all[j] = 1;
        }
    }
    return all;
}

const check = (arr, n) => {
    for(let i = 3; i <= n/2; i++) {
        if(arr[i] || arr[n - i]) continue;
        return `${n} = ${i} + ${n - i}`;
    }
    return "Goldbach's conjecture is wrong.";
}

let arr = isPrime(Math.max.apply(this, input));
let result = [];

for(let i = 0; i < input.length; i++) {
    if(input[i] == 0) break;
    result.push(check(arr, input[i]));
}

console.log(result.join('\n'));