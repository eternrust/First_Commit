// 트리의 지름
// https://www.acmicpc.net/problem/1967

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r/g, '').trim().split('\n');
let data = Array.from({length: +input[0] + 1}, () => new Array(0));

for(let i = 1; i < +input[0]; i++) {
    const [f, s, w] = input[i].split(' ');
    data[+f].push([+s, +w]);
    data[+s].push([+f, +w]);
}

const BFS = (x) => {
    let queue = [x];
    let dist = new Array(+input[0] + 1).fill(0);
    let result = new Array(+input[0] + 1).fill(0);
    let visit = new Array(+input[0] + 1).fill(false);
    visit[x] = true;

    while(queue.length) {
        let x = queue.shift();
        
        for(let i = 0; i < data[x].length; i++) {
            if(!visit[data[x][i][0]]) {
                dist[data[x][i][0]] = dist[x] + data[x][i][1]
                result[data[x][i][0]] = x;
                visit[data[x][i][0]] = true;
                queue.push(data[x][i][0]);
            }
        }
    }

    let num = 1;
    for(let i = 2; i <= data.length; i++) {
        if(dist[num] < dist[i]) {
            num = i;
        }
    }

    return [num, dist[num]]
}

const set = BFS(1);
console.log(BFS(set[0])[1])