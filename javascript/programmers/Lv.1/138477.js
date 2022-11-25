// 명예의 전당 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
    var answer = [];
    let result = [];
    for(let i = 0; i < score.length; i++) {
        result.push(score[i]);
        if(result.length > k) {
            result.splice(result.indexOf(Math.min.apply(null, result)), 1);
        }
        answer.push(Math.min.apply(null, result));
    }
    return answer;
}