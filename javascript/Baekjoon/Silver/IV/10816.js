// 숫자 카드 2
// https://www.acmicpc.net/problem/10816

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

const countByArray = (arr) => {
    return arr.reduce((prev, curr) => {
        prev[curr] = ++prev[curr] || 1;
        return prev;
    }, {});
};

let data = countByArray(input[1].split(' '));
let result = input[3].split(' ');

result = result.map((v) => data[v] || 0);
console.log(result.join(' '));