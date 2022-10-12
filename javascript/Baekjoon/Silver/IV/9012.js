// 괄호
// https://www.acmicpc.net/problem/9012

let fs = require('fs');
let input = fs.readFileSync('../../예제.txt').toString().split('\n');

const stack = {
    data: [],
    top: -1,
}
const MAX_STACK_SIZE = 100;

let answer = [];

function is_full() {
    return stack.top == MAX_STACK_SIZE - 1;
}

function is_empty() {
    return stack.top == -1;
}

function push(data) {
    if (is_full()) return 0;
    stack.data[++stack.top] = data;
}

function pop() {
    if (is_empty()) return -1;
    return stack.data[stack.top--];
}

let data;
let error;
for (let i = 1; i <= Number(input[0]); i++) {

    stack.data = [];
    stack.top = -1;
    error = false;
    input[i] = input[i].replace(/\r*/g, "").split('');

    for(let j = 0; j < input[i].length; j++) {
        data = input[i][j];

        if(data == '(') {
            push(data);
        } else {
            if(pop() != '(') {
                error = true;
                break;
            }
        }

    }

    if( error || !is_empty()) {
        answer.push("NO");
    } else {
        answer.push("YES");
    }

}

console.log(answer.join('\n'));