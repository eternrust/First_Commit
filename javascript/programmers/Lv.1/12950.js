// 행렬의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i < arr1.length; i++) {
        let tmp = [];
        for(let j = 0; j < arr1[i].length; j++) {
            tmp.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(tmp);
    }
    
    return answer;
}