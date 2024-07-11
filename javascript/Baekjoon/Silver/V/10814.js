// 나이순 정렬
// https://www.acmicpc.net/problem/10814

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');
let a = input.slice(1).map((a) => {
    let v = a.split(' ');
    v[0] = Number(v[0]);
    return v;
});

a.sort((a, b) => {
    return a[0] - b[0];
})

console.log(a.map((a) => a.join(' ')).join('\n'));