// 주사위 세개
// https://www.acmicpc.net/problem/2480

let fs = require('fs');
let input = fs.readFileSync('../../예제.txt').toString().split(' ');

let num = [];
let count = 0;
for (let i = 0; i < input.length; i++) {
    num.push(Number(input[i]));
    if (num[0] == num[i] || num[i - 1] == num[i]) count++;
}

switch (count) {
    case 1:
        console.log((num[0] > (num[1] > num[2] ? num[1] : num[2]) ? num[0] : (num[1] > num[2] ? num[1] : num[2])) * 100);
        break;
    case 2:
        console.log(1000 + (num[0] == num[1] ? num[0] : (num[0] == num[2] ? num[0] : num[1])) * 100);
        break;
    case 3:
        console.log(10000 + num[0] * 1000);
        break;
}