// 문자열 다루기 기본
// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    var answer = true;
    s = s.split('');
    
    if(s.length == 4 || s.length == 6) {
        for(let i = 0; i < s.length; i++) {
            if(48 <= s[i].charCodeAt(0) && s[i].charCodeAt(0) <= 57) continue;
            answer = false;
            break;
        }
    } else answer = false;
    
    return answer;
}