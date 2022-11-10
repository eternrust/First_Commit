// 최대공약수와 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12940
// 유클리드 호제법

function lcm(a, b) {
    return (a * b) / gcd(a, b)
}

function gcd(a, b) {
    let r
    while (b != 0) {
        r = a % b
        a = b
        b = r
    }
    return a
}

function solution(n, m) {
    var answer = [];
    answer.push(gcd(n, m));
    answer.push(lcm(n, m));
    return answer;
}