// 반복수열
// https://www.acmicpc.net/problem/2331
// 나중에 DFS 써서 할 예정

let input = require('fs').readFileSync('../../예제.txt').toString().trim().split(' ');

const visit = [];

const pow = (x, y) => {
    tmp = 1;
    for(let i = 0; i < y; i++) {
        tmp *= x;
    }
    return tmp;
}

const DFS = (x, n) => {
    if(visit[x] != undefined) {
        return visit[x];
    }
    visit[x] = n;
    let tmp = `${x}`.split('');
    x = 0;
    for(let i = 0; i < tmp.length; i++) {
        x += pow(+tmp[i], +input[1]);
    }
    return DFS(x, n + 1);
}

console.log(DFS(+input[0], 0));

// DFS 안쓰고 품
// const visit = [];
// let num = +input[0];
// let re = +input[1];
// let cnt = 0;

// const pow = (x, y) => {
//     tmp = 1;
//     for(let i = 0; i < y; i++) {
//         tmp *= x;
//     }
//     return tmp;
// }

// while(visit[num] === undefined) {
//     visit[num] = {
//         length: cnt++
//     }
//     let tmp = `${num}`.split('')
//     num = 0;
//     for(let i = 0; i < tmp.length; i++) {
//         num += pow(+tmp[i], re);
//     }
// }

// console.log(visit[num].length);