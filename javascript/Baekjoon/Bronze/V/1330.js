// 두 수 비교하기 (새싹)
// https://www.acmicpc.net/problem/1330

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split(' ');

if(Number(input[0]) == Number(input[1])) {
    console.log("==");
}
else if(Number(input[0]) > Number(input[1])) {
    console.log(">");
} else {
    console.log("<");
}