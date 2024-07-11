// 당신은 운명을 믿나요?
// https://www.acmicpc.net/problem/27930

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim();
let first = 'YONSEI';
let second = 'KOREA';
let fcnt = 0;
let scnt = 0;

for(let i = 0; i < input.length; i++) {
    if(fcnt === 6 || scnt === 5) break;
    if(first[fcnt] === input[i]) {
        fcnt++;
    }
    if(second[scnt] === input[i]) {
        scnt++;
    }
}

if(fcnt === 6) {
    console.log('YONSEI');
} else {
    console.log('KOREA');
}