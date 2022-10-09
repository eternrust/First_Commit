// 엄청난 부자 2
// https://www.acmicpc.net/problem/1271

let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split(' ');

let num = [];
for(let i = 0; i < input.length; i++) {
    num.push(BigInt(input[i]));
}

console.log((BigInt(num[0]) / BigInt(num[1])).toString());
console.log((BigInt(num[0]) % BigInt(num[1])).toString());