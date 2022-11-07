// 정수 제곱근 판별
// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    var answer = -1;
    if(Math.floor(Math.sqrt(n)) == Math.sqrt(n)) {
        answer = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1);
    }
    return answer;
}