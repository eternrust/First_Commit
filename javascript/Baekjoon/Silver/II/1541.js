// 잃어버린 괄호
// https://www.acmicpc.net/problem/1541
// 3번의 시도 끝에 맞춘 문제.
// VS Code에사 결과 값은 다 같음.
// 솔직히 왜 그런지 모르겠음...

// 수정 전 코드
/*
let fs = require('fs');
let input = fs.readFileSync('../../예제.txt').toString().split('');

let num = [];
let sign = [];
let result = 0;
let tmp = 0;

for (let i = 0; i < input.length; i++) {
    if (tmp == 0 && input[i] == '0') continue;

    if (input[i] == '-' || input[i] == '+') {
        sign.push(input[i]);
        num.push(tmp);
        tmp = 0;
    }
    else tmp = tmp * 10 + Number(input[i]);
}
num.push(tmp);

tmp = 0;
result = num[0];
for (let i = 0; i < sign.length; i++) {
    if (sign[i] == '-') {
        result -= num[i + 1];
        tmp++;
    } else {
        if (tmp) {
            result -= num[i + 1];
        } else {
            result += num[i + 1];
        }
    }
}
console.log(result);
*/

// 수정 후 코드
/*
let fs = require('fs');
let input = fs.readFileSync('../../예제.txt').toString().split('');

let result = 0;
let tmp = 0;
let minus = 0;

for (let i = 0; i < input.length; i++) {
    if (tmp == 0 && input[i] == '0') continue;

    if (input[i] == '-' || input[i] == '+') {
        if(minus) {
            result -= tmp;
        } else {
            result += tmp;
        }
        tmp = 0;
        if(input[i] == '-') {
            minus = 1;
        }
    }
    else tmp = tmp * 10 + Number(input[i]);
}

if(minus) {
    result -= tmp;
} else {
    result += tmp;
}

console.log(result.toString());
*/

// 저것도 백준에 안 되서 다시 수정한 코드
let fs = require('fs');
let input = fs.readFileSync('../../예제.txt').toString().split('-');

let num = [];
let result = 0;
let tmp = 0;

for (let i = 0; i < input.length; i++) {
    num = input[i].toString().split('+');
    for (let j = 0; j < num.length; j++) {
        tmp += Number(num[j]);
    }

    if (i) {
        result -= tmp;
    } else {
        result += tmp;
    }
    tmp = 0;
}

console.log(result.toString());