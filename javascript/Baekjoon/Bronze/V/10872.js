// 팩토리얼
// https://www.acmicpc.net/problem/10827

let input = Number(require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim());

const Factorial = (n) => {
    if(n < 2) return 1;
    return n * Factorial(n - 1);
}

console.log(Factorial(input));