// 연결 요소의 개수
// https://www.acmicpc.net/problem/11724

let input = require('fs').readFileSync('../../예제.txt').toString().trim().split('\n').map((v) => v.split(' ').map(Number));

let arr = Array.from({ length: input[0][0] + 1 }, () => Array(0));
let come = Array(input[0][0] + 1).fill(false);
let cnt = 0;

for (let i = 1; i <= input[0][1]; i++) {
    arr[input[i][0]].push(input[i][1]);
    arr[input[i][1]].push(input[i][0]);
}

arr = arr.map((v) => v.sort((a, b) => a - b));

// const DFS = (x) => {
//     come[x] = true;
//     for (let i = 0; i < arr[x].length; i++) {
//         let y = arr[x][i];
//         if (come[y] == false) {
//             DFS(y);
//         }
//     }
// }

const BFS = (x) => {
    let queue = [x];
    come[x] = true;

    while (queue.length) {
        let v = queue.shift();

        for(let i = 0; i < arr[v].length; i++) {
            if(!come[arr[v][i]]) {
                queue.push(arr[v][i]);
                come[arr[v][i]] = true;
            }
        }
    }
}

for(let i = 1; i <= input[0][0]; i++) {
    if(!come[i]) {
        BFS(i);
        cnt++;
    }
}

console.log(cnt);