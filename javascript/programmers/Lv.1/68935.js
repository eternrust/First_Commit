// 3진법 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    var answer = 0;
    let result = [];
    let tmp = 0;
    let number = 0;
    do {
        tmp = Math.floor(n / 3);
        number = n - tmp * 3;
        result.push(number);
        n = tmp;
    } while(tmp);
    
    number = 0;
    do {
        answer += result.pop() * Math.pow(3, number++);
        result = result.slice(0, result.length);
    } while(result.length);
    
    return answer;
}