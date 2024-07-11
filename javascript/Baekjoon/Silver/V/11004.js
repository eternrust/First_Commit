// K번째 수
// https://www.acmicpc.net/problem/11004

let input = require('fs').readFileSync('../../예제.txt').toString().split('\n').map((v) => v.split(' ').map(Number));

let [[num, cnt], arr] = input;

const answer = (arr) => {
    return arr.sort((a, b) => a - b);
}

console.log(answer(arr)[cnt - 1]);