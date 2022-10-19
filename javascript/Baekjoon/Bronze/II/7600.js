// 문자가 몇갤까
// https://www.acmicpc.net/problem/3058

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().toUpperCase().split('\n');

let result = [];
let num = 0;

for (let i = 0; input[i] != '#'; i++) {
    let arr = new Array(26).fill(0);
    num = 0;
    input[i] = input[i].split('');
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j].match(/[A-Z]/) && arr[input[i].join('').charCodeAt(j) - 65] == 0) {
            arr[input[i].join('').charCodeAt(j) - 65] = 1;
            num++;
        }
    }
    result.push(num);
}

console.log(result.join('\n'));