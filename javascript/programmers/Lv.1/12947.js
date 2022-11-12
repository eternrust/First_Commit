// 하샤드 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    var answer = true;
    let number = x;
    let divisor = 0;
    x = x.toString().split('').map(Number);
    
    for(let i = 0; i < x.length; i++) {
        divisor += x[i];
    }
    
    if(number % divisor) {
        answer = false;
    }
    
    return answer;
}