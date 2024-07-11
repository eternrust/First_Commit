// DFS와 BFS
// https://www.acmicpc.net/problem/1260

let input = require('fs').readFileSync('../../예제.txt').toString().trim().split('\n').map((v) => v.split(' ').map(Number));

let arr = Array.from({ length: input[0][0] + 1 }, () => Array(0));
let comeDFS = Array(input[0][0] + 1).fill(false);
let comeBFS = Array(input[0][0] + 1).fill(false);
let result = Array.from({ length: 2 }, () => Array(0));

for (let i = 1; i <= input[0][1]; i++) {
    arr[input[i][0]].push(input[i][1]);
    arr[input[i][1]].push(input[i][0]);
}

arr = arr.map((v) => v.sort((a, b) => a - b));

const DFS = (x) => {
    comeDFS[x] = true;
    result[0].push(x);
    for (let i = 0; i < arr[x].length; i++) {
        let y = arr[x][i];
        if (comeDFS[y] == false) {
            DFS(y);
        }
    }
}

const BFS = (x) => {
    let queue = [x];
    comeBFS[x] = true;

    while (queue.length) {
        let v = queue.shift();
        result[1].push(v);

        for(let i = 0; i < arr[v].length; i++) {
            if(!comeBFS[arr[v][i]]) {
                queue.push(arr[v][i]);
                comeBFS[arr[v][i]] = true;
            }
        }
    }
}

DFS(input[0][2]);
BFS(input[0][2]);

console.log(result.map((v) => v.join(' ')).join('\n'));