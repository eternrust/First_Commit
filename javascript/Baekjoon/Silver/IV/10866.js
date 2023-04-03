// 덱
// https://www.acmicpc.net/problem/10866

let input = require('fs').readFileSync('../../예제.txt').toString().split('\n');

const deque = {
    data: [],
    front: 0,
    rear: 0,
    size: 0,
}
const MAX_DEQUE_SIZE = 10000;

const push_front = (n) => {
    deque.data[deque.front] = n;
    deque.front = (deque.front - 1 + MAX_DEQUE_SIZE) % MAX_DEQUE_SIZE;
    deque.size++;
}

const push_back = (n) => {
    deque.rear = (deque.rear + 1) % MAX_DEQUE_SIZE;
    deque.data[deque.rear] = n;
    deque.size++;
}

const pop_front = () => {
    if(deque.front == deque.rear) return -1;
    deque.size--;
    deque.front = (deque.front + 1) % MAX_DEQUE_SIZE;
    return deque.data[deque.front];
}

const pop_back = () => {
    if(deque.front == deque.rear) return -1;
    deque.size--;
    let data = deque.data[deque.rear];
    deque.rear = (deque.rear - 1 + MAX_DEQUE_SIZE) % MAX_DEQUE_SIZE;
    return data;
}

const size = () => {
    return deque.size;
}

const empty = () => {
    return Number(deque.front == deque.rear);
}

const front = () => {
    if(deque.front == deque.rear) return -1;
    return deque.data[(deque.front + 1) % MAX_DEQUE_SIZE];
}

const back = () => {
    if(deque.front == deque.rear) return -1;
    return deque.data[deque.rear];
}

let n = Number(input[0]);
let result = [];
for(let i = 1; i <= n; i++) {
    char = input[i].replace(/\r*/g, "").split(' ');
    if(char[0] == 'push_front') {
        push_front(char[1]);
    } else if(char[0] == 'push_back') {
        push_back(char[1]);
    } else if(char[0] == 'pop_front') {
        result.push(pop_front());
    } else if(char[0] == 'pop_back') {
        result.push(pop_back());
    } else if(char[0] == 'size') {
        result.push(size());
    } else if(char[0] == 'empty') {
        result.push(empty());
    } else if(char[0] == 'front') {
        result.push(front());
    } else if(char[0] == 'back') {
        result.push(back());
    }
}

console.log(result.join('\n'));