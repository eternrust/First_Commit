// 주사위 게임
// https://www.acmicpc.net/problem/2476

let fs = require('fs');
let input = fs.readFileSync('../../예제.txt').toString().split('\n');

let cnt = input[0];
let numbers = [];
let max = 0;
for (let i = 1; i < cnt; i++) {
    if (input[i] !== '') {
        numbers.push(input[i].split(' '));
    }
}

for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    let tmp;
    let num = [];
    for (let j = 0; j < numbers[i].length; j++) {
        num.push(Number(numbers[i][j].replace('\r', '')));
        if (num[0] == num[j] || num[j - 1] == num[j]) count++;
    }

    switch (count) {
        case 1:
            tmp = ((num[0] > (num[1] > num[2] ? num[1] : num[2]) ? num[0] : (num[1] > num[2] ? num[1] : num[2])) * 100);
            break;
        case 2:
            tmp = (1000 + (num[0] == num[1] ? num[0] : (num[0] == num[2] ? num[0] : num[1])) * 100);
            break;
        case 3:
            tmp = (10000 + num[0] * 1000);
            break;
    }

    if (tmp > max) max = tmp;
}

console.log(max);