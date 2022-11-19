// 두 정수 사이의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    var answer = 0;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    
    for(let i = min; i <= max; i++) {
        answer += i;
    }
    
    return answer;
}