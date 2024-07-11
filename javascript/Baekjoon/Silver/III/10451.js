// 순열 사이큺
// https://www.acmicpc.net/problem/10451

let input = require('fs').readFileSync('../../예제.txt').toString().trim().split('\n');

let idx = 1;
const result = [];

for(let i = 0; i < +input[0]; i++) {
    let cnt = 0;
    let arr = Array.from({ length: +input[idx] + 1 }, () => Array(0));
    let come = Array(+input[idx] + 1).fill(false);
    const tmp = input[idx + 1].replace('\r', '').split(' ');

    for (let j = 1; j <= +input[idx]; j++) {
        arr[+tmp[j - 1]].push(j);
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

    result.push(cnt);
}

console.log(result.join('\n'));