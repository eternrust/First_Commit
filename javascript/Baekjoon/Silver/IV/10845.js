// 큐
// https://www.acmicpc.net/problem/10845

let input = require('fs').readFileSync('../../예제.txt').toString().split('\n');

const queue = {
    data: [],
    front: 0,
    rear: 0
}
const MAX_QUEUE_SIZE = 10000;

const push = (n) => {
    if(queue.rear + 1 == MAX_QUEUE_SIZE) return -1;
    queue.data[++queue.rear] = n;
}

const pop = () => {
    if(queue.front == queue.rear) return -1;
    return queue.data[++queue.front];
}

const size = () => {
    return queue.rear - queue.front;
}

const empty = () => {
    return Number(queue.front == queue.rear);
}

const front = () => {
    if(queue.front == queue.rear) return -1;
    return queue.data[queue.front + 1];
}

const back = () => {
    if(queue.front == queue.rear) return -1;
    return queue.data[queue.rear];
}

let n = Number(input[0]);
let result = [];
for (let i = 1; i <= n; i++) {
    char = input[i].replace(/\r*/g, "").split(' ');
    switch(char[0]) {
        case 'push':
            push(char[1]);
            break;
        case 'pop':
            result.push(pop());
            break;
        case 'size':
            result.push(size());
            break;
        case 'empty':
            result.push(empty());
            break;
        case 'front':
            result.push(front());
            break;
        case 'back':
            result.push(back());
            break;
    }
}
console.log(result.join('\n'));