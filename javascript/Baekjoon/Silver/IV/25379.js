// 피하
// https://www.acmicpc.net/problem/25379

let input = require('fs').readFileSync('../../예제.txt').toString().split('\n');

let arr = input[1].split(' ').map(Number).sort((a, b) => {
    if(a % 2 && !(b % 2)) {
        return 0;
    }
});