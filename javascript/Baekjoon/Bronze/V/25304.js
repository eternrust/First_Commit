// 영수증
// https://www.acmicpc.net/problem/25304

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let money = Number(input.shift());
let count = Number(input.shift());
let sum = 0;

for(let i = 0; i < count; i++) {
    let nums = input[i].split(' ').map(Number);
    sum += nums[0] * nums[1];
}

console.log(money == sum ? 'Yes' : 'No');