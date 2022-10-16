// 수열 정렬
// https://www.acmicpc.net/problem/1015
let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").split('\n');

let count = Number(input.shift());
input = input[0].split(' ');
const toNumbers = arr => arr.map(Number);
input = toNumbers(input);

let index = new Array(count).fill(0);
let value = new Array(count).fill(0);
let tmp = 0;

for(let i = count; i < input.length;) {
    input.pop();
}

for(let i = 0; i < count; i++) {
    while(input.indexOf(tmp) == -1) {
        tmp++;
    }
    index[i] = input.indexOf(tmp);
    input[input.indexOf(tmp)] = -1;
}

for(let i = 0; i < count; i++) {
    value[index[i]] = i;
}

console.log(value.join(' '));