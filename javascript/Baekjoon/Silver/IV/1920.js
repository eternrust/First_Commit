// 수 찾기
// https://www.acmicpc.net/problem/1920

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

const search = (arr, num, start, end) => {
    if(start > end) {
        return 0;
    }
    let mid = Math.floor((start + end) / 2);

    if(arr[mid] == num) {
        return 1;
    }
    else if(arr[mid] > num) {
        return search(arr, num, start, mid - 1);
    } else {
        return search(arr, num, mid + 1, end);
    }
}

let result = [];
let num = input[1]
    .split(' ')
    .sort((a, b) => {
        return a - b;
    })
    .map(Number);

let tmp = input[3].split(' ').map(Number);

result = tmp.map((item) => {
    return search(num, item, 0, num.length - 1);
});

console.log(result.join('\n'));