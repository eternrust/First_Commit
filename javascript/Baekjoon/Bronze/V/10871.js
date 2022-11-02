// X보다 작은 수 (새싹)
// https://www.acmicpc.net/problem/10871

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');
input[0] = input[0].split(' ').map(Number);
let count = input[0].shift();
let num = input[0].shift();
let result = [];
input = input[1].split(' ').map(Number);

for(let i = 0; i < count; i++) {
    if(input[i] < num) {
        result.push(input[i]);
    }
}

console.log(result.join(' '));
