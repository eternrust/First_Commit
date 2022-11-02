// 윤년 (새싹)
// https://www.acmicpc.net/problem/2753

let input = Number(require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim());

if((input % 4 === 0 && input % 100) || input % 400 === 0) {
    console.log(1);
}
else {
    console.log(0);
}