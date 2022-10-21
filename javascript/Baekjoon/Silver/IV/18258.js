// 큐 2
// https://www.acmicpc.net/problem/10828

let fs = require('fs');
let input = fs.readFileSync('../../예제.txt').toString().split('\n');

const queue = {
    data: [],
    front: 0,
    rear: 0,
}
const MAX_QUEUE_SIZE = 2000000;

let answer = [];

function is_full() {
    return Number(queue.front == (queue.rear + 1) % MAX_QUEUE_SIZE);
}

function is_empty() {
    return Number(queue.front == queue.rear);
}

function push(data) {
    if (is_full()) return 0;
    queue.rear = ++queue.rear % MAX_QUEUE_SIZE;
    queue.data[queue.rear] = data;
}

function pop() {
    if (is_empty()) return -1;
    queue.front = ++queue.front % MAX_QUEUE_SIZE;
    return queue.data[queue.front];
}

function size() {
    return queue.rear > queue.front ? queue.rear - queue.front : queue.front - queue.rear;
}

function front() {
    if (is_empty()) return -1;
    return queue.data[(queue.front + 1) % MAX_QUEUE_SIZE];
}

function back() {
    if (is_empty()) return -1;
    return queue.data[queue.rear];
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
        case 'front':
            answer.push(front());
            break;
        case 'back':
            answer.push(back());
            break;
    }
}

console.log(answer.join('\n'));