// 자릿수 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n)
{
    var answer = 0;
    n = n.toString().split('').map(Number);
    
    for(let i = 0; i < n.length; i++) {
        answer += n[i];
    }

    return answer;
}