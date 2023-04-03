// 요세푸스 문제
// https://www.acmicpc.net/problem/1158

let input = require('fs').readFileSync('../../예제.txt').toString().split(' ');
let array = Array.from({length: Number(input[0]) + 1}, (v, i) => i);

const queue = {
    data: array,
    front: 0,
    rear: array.length - 1
}
const MAX_QUEUE_SIZE = 5001;

const push = (n) => {
    queue.rear = ++queue.rear % MAX_QUEUE_SIZE;
    queue.data[queue.rear] = n;
}

const pop = () => {
    queue.front = ++queue.front % MAX_QUEUE_SIZE;
    return queue.data[queue.front];
}

let result = [];
let qap = Number(input[1]);
let count = 0;
while(queue.front != queue.rear) {
    if(++count == qap) {
        result.push(pop());
        count = 0;
    }
    else {
        push(pop())
    }
}

console.log('<' + result.join(', ').trim() + '>');