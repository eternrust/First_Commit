// 약수의 개수와 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function Even_Odd(number) {
    let count = 0;
    for(let i = 1; i <= number; i++) {
        if(number % i == 0) count++;
    }
    return (count + 1) % 2;
}

function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i++) {
        if(Even_Odd(i)) answer += i;
        else answer -= i;
    }
    return answer;
}