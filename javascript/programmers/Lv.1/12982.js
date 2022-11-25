// 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    var answer = 0;
    let result = 0;
    d = d.sort((a, b) => a - b);
    for(let i = 0; i < d.length && result + d[i] <= budget; i++) {
        result += d[i];
        answer++;
    }
    return answer;
}