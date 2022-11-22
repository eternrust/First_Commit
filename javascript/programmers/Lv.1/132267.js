// 콜라 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
    var answer = 0;
    let tmp = 0;
    while(n >= a) {
        tmp = n % a;
        n = Math.floor(n / a) * b;
        answer += n;
        n += tmp;
    }
    return answer;
}