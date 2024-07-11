// 소인수분해
// https://www.acmicpc.net/problem/11653

let input = Number(require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim());

let result = [];
for(let i = 2; i*i<=input; i++) {
    while(input % i == 0) {
        result.push(i);
        input /= i;
    }
}

if(input > 1) {
    result.push(input);
}

console.log(result.join('\n'));