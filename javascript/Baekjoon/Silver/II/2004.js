// 조합 0의 개수
// https://www.acmicpc.net/problem/1676

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ').map(Number);

// 이게 더 빠름
const repeat = (n, d) => {
    let result = 0;
    for(let i = d; i <= n; i *= d) {
        result += Math.floor(n / i);
    }
    return result;
}

let two = repeat(input[0], 2) - repeat(input[0] - input[1], 2) - repeat(input[1], 2);
let five = repeat(input[0], 5) - repeat(input[0] - input[1], 5) - repeat(input[1], 5);

console.log(Math.min(two, five));

/*
const repeat = (n, b, d) => {
    if(d > n) return 0;
    return Math.floor(n / d) + repeat(n, b, b * d);
}

let two = repeat(input[0], 2, 2) - repeat(input[0] - input[1], 2, 2) - repeat(input[1], 2, 2);
let five = repeat(input[0], 5, 5) - repeat(input[0] - input[1], 5, 5) - repeat(input[1], 5, 5);

console.log(Math.min(two, five));
*/