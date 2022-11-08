// 정수 내림차순으로 배치하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    var answer = 0;
    answer = Number(n.toString().split('').map(Number).sort((a, b) => b - a).join(''));
    return answer;
}