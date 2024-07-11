// 섬의 개수
// https://www.acmicpc.net/problem/4963

let input = require('fs').readFileSync('../../예제.txt').toString().trim().replace(/\r/g, '').split('\n');

let line = 0;
let dx = [-1, -1, -1, 0, 1, 1, 1, 0];
let dy = [-1, 0, 1, 1, 1, 0, -1, -1];
let result = [];
let cnt = 0;
let width = 0
let height = 0
let arr = []
let visit = []

const BFS = (x, y, cnt) => {
    let queue = [[x, y]]
    visit[x][y] = cnt;
    result[cnt - 1]++;

    while(queue.length) {
        [x, y] = queue.shift();

        for(let i = 0; i < 8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(0 <= nx && nx < +height && 0 <= ny && ny < +width) {
                if(arr[nx][ny] == 1 && visit[nx][ny] == 0) {
                    queue.push([nx, ny]);
                    visit[nx][ny] = cnt;
                }
            }
        }
    }
}

while(input[line] !== '0 0') {
    [width, height] = input[line++].split(' ');
    arr = Array.from({length: +height}, () => Array(0));
    visit = Array.from({length: +height}, () => Array(+width).fill(0));
    result[cnt++] = 0;

    for(let i = 0; i < +height; i++) {
        arr[i] = input[line++].split(' ');
    }

    for(let i = 0; i < +height; i++) {
        for(let j = 0; j < +width; j++) {
            if(arr[i][j] == 1 && visit[i][j] == 0) {
                BFS(i, j, cnt);
            }
        }
    }
}

console.log(result.join('\n'));