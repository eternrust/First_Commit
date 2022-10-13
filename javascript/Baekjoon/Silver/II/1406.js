// 에디터
// https://www.acmicpc.net/problem/1406


let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").split('\n');

// 시간초과로 실패한 코드
/*
let count = Number(input[1]) + 2;
let data = input[0].split('');
let cursor = data.length;
for (let i = 2; i < count; i++) {
    input[i] = input[i].split(' ');
    switch (input[i][0]) {
        case 'L':
            if (cursor > 0) {
                cursor--;
            }
            break;
        case 'D':
            if (cursor < data.length) {
                cursor++;
            }
            break;
        case 'B':
            if (cursor > 0) {
                data.splice(--cursor, 1)
            }
            break;
        case 'P':
            if (cursor > 0) {
                data.splice(cursor++, 0, input[i][1]);
            }
            break;
    }
}

console.log(data.join('').toString());
*/

// 다시 짠 코드
let count = Number(input[1]) + 2;
let left = input[0].split('');
let right = [];
for (let i = 2; i < count; i++) {
    input[i] = input[i].split(' ');
    switch (input[i][0]) {
        case 'L':
            if (left.length) {
                right.push(left.pop());
            }
            break;
        case 'D':
            if (right.length) {
                left.push(right.pop());
            }
            break;
        case 'B':
            if (left.length) {
                left.pop();
            }
            break;
        case 'P':
            left.push(input[i][1]);
            break;
    }
}

console.log(left.concat(right.reverse()).join(''));