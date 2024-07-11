// 팩토리얼 0의 개수
// https://www.acmicpc.net/problem/1676

let input = Number(require('fs').readFileSync('../../예제.txt'));
console.log(Math.floor(input / 5) + Math.floor(input / 25) + Math.floor(input / 125));