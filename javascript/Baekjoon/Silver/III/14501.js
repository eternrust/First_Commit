// 퇴사
// https://www.acmicpc.net/problem/14501
// 풀지 못한 문제

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');
let a = input.slice(1).map((v) => v.split(' ').map(Number));
let cnt = Number(input[0])
let tmp = [0, 0];
let result = 0;

for (let value of a) {
    if(tmp[0] === 0) {
        result += tmp[1];
        console.log(tmp)
        tmp = value;
    } else if(tmp[1] / tmp[0] < value[1] / value[0] || (value[0] <= cnt && tmp[1] < value[1])) {
        tmp = value;
    }
    cnt--;
    tmp[0]--;
}

if(tmp[0] === 0) {
    result += tmp[1];
    console.log(tmp)
}

console.log(result);