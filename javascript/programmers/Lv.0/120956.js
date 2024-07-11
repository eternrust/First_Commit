// 옹알이 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
    var answer = 0;
    for (let value of babbling) {
        value = value.replace(/aya|ye|woo|ma/g, '');
        answer += value ? 0 : 1;
    }
    return answer;
}