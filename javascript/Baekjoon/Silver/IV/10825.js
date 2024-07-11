// 국영수
// https://www.acmicpc.net/problem/10814

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');
let a = input.slice(1).map((a) => {
    let v = a.split(' ');
    v[1] = Number(v[1]);
    v[2] = Number(v[2]);
    v[3] = Number(v[3]);
    return v;
});

a.sort((a, b) => {
    if(a[1] === b[1]) {
        if(a[2] === b[2]) {
            if(a[3] === b[3]) {
                return a[0] > b[0] ? 1 : -1;
            }
            return b[3] - a[3]
        }
        return a[2] - b[2];
    }
    return b[1] - a[1];
})

console.log(a.map((a) => a[0]).join('\n'));