// GCD 합
// https://www.acmicpc.net/problem/9613

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');
let sum = 0;
let output = [];

const gcd = (a, b) => {
    if(b == 0) return a;
    return gcd(b, a % b);
}

const _combination = (arr, data, s, idx, r) => {
    if(s == r){
        sum += gcd(data[0], data[1]);
        return;
    }
    for(let i = idx; arr.length - i >= r - s; i++){
        data[s] = arr[i];
        _combination(arr, data, s + 1, i + 1, r);
    }
}

let result = [];
let count = Number(input[0]);
for(let i = 1; i <= count; i++) {
    sum = 0;
    input[i] = input[i].split(' ').map(Number);
    _combination(input[i].slice(1, input[i][0] + 1), output, 0, 0, 2);
    result.push(sum)
}

console.log(result.join('\n'));