// 기사단원의 무기
// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function notPrime(number) {
    let count = 0;
    for(let i = 1; i <= Math.sqrt(number); i++) {
        if(number % i == 0) {
            count++;
            if(number / i != i) count++;
        }
    }
    return count;
}

function solution(number, limit, power) {
    var answer = 0;
    let count = 0;
    for(let i = 1; i <= number; i++) {
        count = notPrime(i);
        if(count > limit) {
            answer += power;
        } else {
            answer += count;
        }
    }
    return answer;
}