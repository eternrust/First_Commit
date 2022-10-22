// 초 6 수학
// https://www.acmicpc.net/problem/2702

let input = require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim().split('\n');

function sort(num) {
    let result = [];
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            result.push(i);
        }
    }
    return result;
}

function small(num1, num2) {
    let arr1 = sort(num1);
    let arr2 = sort(num2);
    let max = 1;
    let tmp1 = 0;
    let tmp2 = 0;
    while(tmp1 < arr1.length && tmp2 < arr2.length) {
        if(arr1[tmp1] == arr2[tmp2]) {
            max = arr1[tmp1];
            tmp1++;
            tmp2++;
        } else if(arr1[tmp1] > arr2[tmp2]) {
            tmp2++;
        } else {
            tmp1++;
        }
    }
    return max;
}

function big(num1, num2) {
    let numA = num1;
    let numB = num2;
    while(numA !== numB) {
        if(numA < numB) {
            numA += num1;
        } else {
            numB += num2;
        }
    }
    return numA;
}

let count = Number(input.shift());
let result = [];

for(let i = 0; i < count; i++) {
    input[i] = input[i].split(' ');
    input[i][0] = Number(input[i][0]);
    input[i][1] = Number(input[i][1]);
    result.push([big(input[i][0], input[i][1]), small(input[i][0], input[i][1])]);
    result[i] = result[i].join(' ');
}

console.log(result.join('\n'));