// 스택
// https://www.acmicpc.net/problem/10828

let fs = require('fs');
let input = fs.readFileSync('../../예제.txt').toString().split('\n');

const stack = {
    data: [],
    top: -1,
}
const MAX_STACK_SIZE = 10000;

let answer = [];

function is_full() {
    return Number(stack.top == MAX_STACK_SIZE - 1);
}

function is_empty() {
    return Number(stack.top == -1);
}

function push(data) {
    if (is_full()) return 0;
    stack.data[++stack.top] = data;
}

function pop() {
    if (is_empty()) return -1;
    return stack.data[stack.top--];
}

function top() {
    if (is_empty()) return -1;
    return stack.data[stack.top];
}

function size() {
    return stack.top + 1;
}

for (let i = 1; i <= Number(input[0]); i++) {
    input[i] = input[i].replace(/\r*/g, "").split(' ');

    data = input[i][0];
    switch (data) {
        case 'push':
            push(input[i][1]);
            break;
        case 'pop':
            answer.push(pop());
            break;
        case 'size':
            answer.push(size());
            break;
        case 'empty':
            answer.push(is_empty());
            break;
        case 'top':
            answer.push(top());
            break;
    }
}

console.log(answer.join('\n'));