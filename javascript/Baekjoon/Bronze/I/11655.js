// ROT13
// https://www.acmicpc.net/problem/11655

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").split('');

const plus = (char) => {
    return String.fromCodePoint(char + 13);
}

const minus = (char) => {
    return String.fromCodePoint(char - 13);
}

for(let i = 0; i < input.length; i++) {
    let char = input[i].charCodeAt(0);
    if(/[A-Z]/.test(input[i])) {
        if(char <= 77) {
            input[i] = plus(char);
        } else {
            input[i] = minus(char);
        }
    } else if(/[a-z]/.test(input[i])) {
        if(char <= 109) {
            input[i] = plus(char)
        } else {
            input[i] = minus(char);
        }
    }
}

console.log(input.join(''));