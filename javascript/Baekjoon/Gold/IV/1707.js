// 이분 그래프
// https://www.acmicpc.net/problem/1707

let input = require('fs').readFileSync('../../예제.txt').toString().trim().split('\n');

let idx = 1;
const result = [];

for(let i = 0; i < +input[0]; i++) {
    input[idx] = input[idx].split(' ');
    let arr = Array.from({ length: +input[idx][0] + 1 }, () => Array(0));
    let come = Array(+input[idx][0] + 1).fill(0);
    const tmp = [];

    for (let j = 0; j < +input[idx][1]; j++) {
        tmp.push(input[j + idx + 1].replace('\r', '').split(' '));
        arr[+tmp[j][0]].push(+tmp[j][1]);
        arr[+tmp[j][1]].push(+tmp[j][0]);
    }
    
    idx += +input[idx][1] + 1;
    arr = arr.map((v) => v.sort((a, b) => a - b));

    const DFS = (x, c) => {
        come[x] = c;
        for (let i = 0; i < arr[x].length; i++) {
            let y = arr[x][i];
            if (come[y] == false) {
                DFS(y, 3-c);
            }
        }
    }
    
    for(let j = 1; j < arr.length; j++) {
        if(!come[j]) {
            DFS(j, 1);
        }
    }

    for(let j = 0; j < tmp.length; j++) {
        if(come[+tmp[j][0]] === come[+tmp[j][1]]) {
            result.push('NO');
            break;
        }
    }

    if(result.length === i) {
        result.push('YES');
    }
}

console.log(result.join('\n'));