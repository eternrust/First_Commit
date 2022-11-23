// 삼총사
// https://school.programmers.co.kr/learn/courses/30/lessons/131705

let count = 0;
let output = [];

function _combination(arr, data, s, idx, r){
    if(s == r){
        if(data[0] + data[1] + data[2] == 0) {
            count++;
        }
        return;
    }
    for(let i = idx; arr.length - i >= r - s; i++){
        data[s] = arr[i];
        _combination(arr, data, s + 1, i + 1, r);
    }
}

function solution(number) {
    var answer = 0;
    _combination(number, output, 0, 0, 3);
    answer = count;
    return answer;
}