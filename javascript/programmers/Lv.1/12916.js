// 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
    var answer = true;
    let count = 0;
    s = s.toLowerCase();
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] == 'p') count++;
        if(s[i] == 'y') count--;
    }
    
    if(count) answer = false;
    
    return answer;
}