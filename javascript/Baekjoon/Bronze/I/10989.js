// 수 정렬하기 3
// https://www.acmicpc.net/problem/10989
// 메모리 초과로 정답으로 인정되지는 않음

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n').map(Number);

let result = Array(10001).fill(0);
for(let i = 1; i <= input[0]; i++) {
    result[input[i]]++;
}

let answer = [];
for(let i = 1; i <= 10000; i++) {
    if(!result[i]) continue;
    for(let j = 0; j < result[i]; j++) {
        answer.push(i);
    }
}

console.log(answer.join('\n'));