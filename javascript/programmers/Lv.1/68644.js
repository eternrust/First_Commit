// 두 개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

let result = [];
function _permutation(arr, s, r){
    if(s == r){
        result.push(arr[0] + arr[1]);
        return;
    } 
    for(let i = s; i < arr.length; i++){
        [arr[s],arr[i]] = [arr[i],arr[s]];
        _permutation(arr, s + 1, r);
        [arr[s],arr[i]] = [arr[i],arr[s]];
    }
}

function solution(numbers) {
    var answer = [];
    _permutation(numbers, 0, 2);
    answer = Array.from(new Set(result)).sort((a, b) => a - b);
    return answer;
}