// 곱셈
// https://www.acmicpc.net/problem/2588

let fs = require('fs');
let input = fs.readFileSync('../../예제.txt').toString().split('\n');

let num = [];
let tmp;
let result = 0;
for(let i = 0; i < input.length; i++) {
    num.push(Number(input[i].replace('\r', '')));
}
console.log(num);

for(let i = 1; i <= 100; i*=10) {
    tmp = num[0] * ( num[1] % 10 );
    console.log(tmp);
    result += tmp * i;
    num[1] = Math.floor(num[1] / 10);
}

console.log(result);