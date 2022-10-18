// 자동완성
// https://www.acmicpc.net/problem/24883

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim();

if(input == 'N' || input == 'n') {
    console.log('Naver D2');
} else {
    console.log('Naver Whale');
}