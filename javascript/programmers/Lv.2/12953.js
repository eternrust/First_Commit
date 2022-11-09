// N개의 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12953
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

function solution(arr) {
    var answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }
    return answer;
}