// 최대공약수와 최소공배수
// https://www.acmicpc.net/problem/2609

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');
input = input.map(Number);

const gcd = (a, b) => {
    if(b == 0) return a;
    return gcd(b, a % b);
}

const lcm = (a, b, g) => {
    return g * (a / g) * (b / g);
}

let num = gcd(input[0], input[1]);
console.log(num);
console.log(lcm(input[0], input[1], num));

/* 과거의 나
let result = [];
let data1 = Number(input[0]);
let data2 = Number(input[1]);
let min = 0;
let max = 0;

for(let i = 1; i <= data1 && i <= data2; i++) {
    if(data1 % i == 0 && data2 % i == 0) {
        min = i;
    }
}

result.push(min);
min = data1;
max = data2;

do {
    if(min > max) {
        max += data2;
    } else if(min < max) {
        min += data1;
    }
} while(min !== max);

result.push(min);

console.log(result.join(' '));
*/