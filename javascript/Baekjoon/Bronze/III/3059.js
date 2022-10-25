// 등장하지 않는 문자의 합
// https://www.acmicpc.net/problem/3059

// 런타임 에러(EACCES) 현상 때매 readline으로 수정

// 수정 전
// let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

// let count = Number(input.shift());
// let result = [];
// let tmp;

// for(let i = 0; i < count; i++) {
//     let arr = new Array(26).fill(0);
//     tmp = input[i];
//     input[i] = input[i].split('');
//     for(let j = 0; j < input[i].length; j++) {
//         if(arr[tmp.charCodeAt(j) - 65] == 0) {
//             arr[tmp.charCodeAt(j) - 65] = 1;
//         }
//     }
//     tmp = 0;
//     for(let j = 0; j < 26; j++) {
//         if(arr[j] == 0) {
//             tmp += j + 65;
//         }
//     }
//     result.push(tmp);
// }

// console.log(result.join('\n'));

// 수정 후

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = [];

rl.on('line', function (line) {
    input.push(line)
})
    .on('close', function () {
        let count = Number(input.shift());
        let tmp;

        for (let i = 0; i < count; i++) {
            let arr = new Array(26).fill(0);
            tmp = input[i];
            input[i] = input[i].split('');
            for (let j = 0; j < input[i].length; j++) {
                if (arr[tmp.charCodeAt(j) - 65] == 0) {
                    arr[tmp.charCodeAt(j) - 65] = 1;
                }
            }
            tmp = 0;
            for (let j = 0; j < 26; j++) {
                if (arr[j] == 0) {
                    tmp += j + 65;
                }
            }
            result.push(tmp);
        }

        console.log(result.join('\n'));
        process.exit();
    });