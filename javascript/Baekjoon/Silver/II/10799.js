// 쇠막대기
// https://www.acmicpc.net/problem/10799

let fs = require('fs');
let input = fs.readFileSync('../../예제.txt').toString().split('');

let answer = 0;
let data;
let top = 0;
let open = false;
let lock = false;
for (let i = 0; i < input.length; i++) {
    data = input[i];
    if(data == '(') {
        top++;
        if(top > 1) {
            open = true;
            lock = true;
        }
    } else {
        if(open) {
            answer += --top;
            open = false;
        } else {
            top--;
            if(top > 0) {
                answer += 1;
            }
        }
    }
    if(lock && top == 0) {
        answer += 1;
        lock = false;
    }
}

console.log(answer);