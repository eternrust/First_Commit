// 아스키 코드 (새싹)
// https://www.acmicpc.net/problem/11654

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim();

console.log(input.charCodeAt(0));