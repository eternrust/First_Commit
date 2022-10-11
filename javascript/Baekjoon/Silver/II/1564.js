// 팩토리얼5
// https://www.acmicpc.net/problem/1564

let fs = require('fs');
let input = fs.readFileSync('../../예제.txt').toString();

let num = BigInt(input);
let result = 1;

for (let i = 2; i <= num; i++) {
    result = BigInt(result) * BigInt(i);

    result = result.toString().replace(/(0+$)/,"");
    if(result.length > 20) {
        result = (BigInt(result) % 1000000000000000000000n).toString();
    }
}

console.log(result.slice(result.length - 5, result.length));