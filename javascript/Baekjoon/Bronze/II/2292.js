// 벌집
// https://www.acmicpc.net/problem/2292

let input = Number(require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim());
let result = 1;
let count = 6;

while(input > 1) {
    result++;
    input -= count;
    count += 6;
}

console.log(result);