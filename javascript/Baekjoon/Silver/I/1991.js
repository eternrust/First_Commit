// 트리 순회
// https://www.acmicpc.net/problem/1991

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r/g, '').trim().split('\n');

let object = {}

for(let i = 1; i <= +input[0]; i++) {
    const [head, ...data] = input[i].split(' ');
    object[head] = data;
}

const PreOrder = (root) => {
    let data = root;
    if(object[root][0] != '.') {
        data = data + PreOrder(object[root][0]);
    }
    if(object[root][1] != '.') {
        data = data + PreOrder(object[root][1]);
    }
    return data;
}

const InOrder = (root) => {
    let data = root;
    if(object[root][0] != '.') {
        data = InOrder(object[root][0]) + data;
    }
    if(object[root][1] != '.') {
        data =  data + InOrder(object[root][1]);
    }
    return data;
}

const PostOrder = (root) => {
    let data = root;
    if(object[root][1] != '.') {
        data = PostOrder(object[root][1]) + data;
    }
    if(object[root][0] != '.') {
        data = PostOrder(object[root][0]) + data;
    }
    return data;
}

const result = [PreOrder('A'), InOrder('A'), PostOrder('A')];
console.log(result.join('\n'));