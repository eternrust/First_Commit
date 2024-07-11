// 트리의 부모 찾기
// https://www.acmicpc.net/problem/11725

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r/g, '').trim().split('\n');

let data = Array.from({length: +input[0] + 1}, () => new Array(0));
let visit = new Array(+input[0] + 1).fill(false);
let result = new Array(+input[0] + 1).fill(0);

for(let i = 1; i < +input[0]; i++) {
    const [f, s] = input[i].split(' ');
    data[+f].push(+s);
    data[+s].push(+f);
}

let queue = [1];
visit[1] = true;

while(queue.length) {
    let x = queue.shift();
    
    for(let i = 0; i < data[x].length; i++) {
        if(!visit[data[x][i]]) {
            result[data[x][i]] = x;
            visit[data[x][i]] = true;
            queue.push(data[x][i]);
        }
    }
}

console.log(result.slice(2).join('\n'))