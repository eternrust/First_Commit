// 수박수박수박수박수박수?
// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    var answer = [];
    for(let i = 0; i < n; i++) {
        if(i % 2) {
            answer.push("박");
        } else {
            answer.push("수");
        }
    }
    return answer.join('');
}