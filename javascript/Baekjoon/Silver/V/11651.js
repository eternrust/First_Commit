// 좌표 정렬하기 2
// https://www.acmicpc.net/problem/11651

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');
let a = input.slice(1).map((a) => a.split(' ').map(Number));

a.sort((a, b) => {
    if(a[1] == b[1]) return a[0] - b[0];
    return a[1] - b[1];
})

console.log(a.map((a) => a.join(' ')).join('\n'));