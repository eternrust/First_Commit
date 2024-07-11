// 텀 프로젝트
// https://www.acmicpc.net/problem/9466
// 메모리 초과 나요

let input = require('fs').readFileSync('../../예제.txt').toString().trim().split('\n');

let idx = 1;
const result = [];
let cnt;
let arr;
let come;
let tmp;

for(let i = 0; i < +input[0]; i++) {
    cnt = 0;
    arr = Array.from({ length: +input[idx] + 1 }, () => Array(0));
    come = Array(+input[idx] + 1).fill(false);
    tmp = input[idx + 1].replace('\r', '').split(' ');

    for (let j = 1; j <= +input[idx]; j++) {
        arr[j].push(+tmp[j - 1]);
    }
    
    idx += 2;
    arr = arr.map((v) => v.sort((a, b) => a - b));

    const DFS = (x) => {
        come[x] = true;
        for (let i = 0; i < arr[x].length; i++) {
            let y = arr[x][i];
            if (!come[y]) {
                DFS(y);
            }
        }
    }
    
    for(let j = 1; j < arr.length; j++) {
        if(!come[j]) {
            DFS(j, 1);
            cnt++;
        }
    }

    result.push(arr.length - 1 - cnt);
}

console.log(result.join('\n'));