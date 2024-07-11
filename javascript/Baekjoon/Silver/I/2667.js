// 단지번호붙이기
// https://www.acmicpc.net/problem/2667

let input = require('fs').readFileSync('../../예제.txt').toString().trim().split('\n');

let arr = Array.from({length: +input[0]}, () => Array(0));
let visit = Array.from({length: +input[0]}, () => Array(+input[0]).fill(0));
let result = [0];
let cnt = 0;
let dx = [0, 0, 1, -1];
let dy = [-1, 1, 0, 0];

for(let i = 0; i < +input[0]; i++) {
    arr[i] = [...input[i + 1].replace('\r','').split('')];
}

const DFS = (x, y, cnt) => {
    visit[x][y] = cnt + 1;
    result[cnt] ? result[cnt]++: result[cnt] = 1;
    for(let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(0 <= nx && nx < +input[0] && 0 <= ny && ny < +input[0]) {
        if(arr[nx][ny] == 1 && visit[nx][ny] == 0) {
            DFS(nx, ny, cnt);
        }
    }
    }
}

for(let i = 0; i < +input[0]; i++) {
    for(let j = 0; j < +input[0]; j++) {
        if(arr[i][j] == 1 && visit[i][j] == 0) {
            DFS(i, j, cnt++);
        }
    }
}

console.log(`${cnt}\n${result.sort((a, b) => a - b).join('\n')}`);