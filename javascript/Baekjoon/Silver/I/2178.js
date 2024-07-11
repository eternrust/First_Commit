// 미로 탐색
// https://www.acmicpc.net/problem/2178

let input = require('fs').readFileSync('../../예제.txt').toString().trim().replace(/\r/g, '').split('\n');

const [height, width] = input[0].split(' ');
const arr = Array.from({length: +height}, () => Array(0));
const visit = Array.from({length: +height}, () => Array(+width).fill(0));

for(let i = 0; i < +height; i++) {
    arr[i] = input[i + 1].split('');
}

let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];
let cnt = 1;
let queue = [[0, 0]];
visit[0][0] = 1;


while(queue.length) {
    let [x, y] = queue.shift();
    cnt++;

    for(let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(0 <= nx && nx < +height && 0 <= ny && ny < width) {
            if(arr[nx][ny] == 1 && visit[nx][ny] == 0) {
                queue.push([nx, ny]);
                visit[nx][ny] = cnt;
            }
        }
    }
}

console.log(visit[height - 1][width - 1]);