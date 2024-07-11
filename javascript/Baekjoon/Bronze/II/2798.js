// 블랙잭
// https://www.acmicpc.net/problem/2798

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

let [cnt, limit] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let max = 0;

let output = [];
const _combination = (arr, data, s, idx, r) => {
    if(s == r){
        let sum = data[0] + data[1] + data[2];
        if(sum > max && sum <= limit) max=sum;
        return;
    }
    for(let i = idx; arr.length - i >= r - s; i++){
        data[s] = arr[i];
        _combination(arr, data, s + 1, i + 1, r);
    }
}

_combination(arr, output, 0, 0, 3)
console.log(max)