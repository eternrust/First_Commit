// 단어 정렬
// https://www.acmicpc.net/problem/1181

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").split('\n');

let count = Number(input.shift());

for(let i = count; i < input.length;) {
    input.pop();
}

let arr = Array.from(new Set(input));

if(arr.length > 1) {
    arr.sort((a, b) => {
        if(a.length == b.length) {
            for(let i = 0; i < a.length; i++) {
                if (a.charCodeAt(i) > b.charCodeAt(i)) {
                    return 1;
                } else if (a.charCodeAt(i) < b.charCodeAt(i)) {
                    return -1;
                }
            }
            return 0;
        }
        return a .length - b.length
    });
}

console.log(arr.join('\n'));