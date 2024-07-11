// 최소공배수
// https://www.acmicpc.net/problem/1934

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

const gcd = (a, b) => {
    if(b == 0) return a;
    return gcd(b, a % b);
}

const lcm = (a, b, g) => {
    return g * (a / g) * (b / g);
}

let result = [];
let count = Number(input[0]);
for(let i = 1; i <= count; i++) {
    input[i] = input[i].split(' ').map(Number);
    result.push(lcm(input[i][0], input[i][1], gcd(input[i][0], input[i][1])));
}

console.log(result.join('\n'));