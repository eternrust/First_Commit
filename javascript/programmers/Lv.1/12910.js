// 나누어 떨어지는 숫자 배열
// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    var answer = arr.filter((n) => n % divisor == 0).sort((a, b) => a - b);
    if(answer.length == 0) {
        answer = [-1];
    }
    return answer;
}