// 시저 암호
// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    var answer = '';
    let tmp = 0;
    let char = '';
    s = s.split('')
    for(let i = 0; i < s.length; i++) {
        if(s[i] == ' ') continue;
        
        char = s[i].toLowerCase();
        tmp = s[i].charCodeAt(0) + n;
        
        if((char == s[i] && 97 <= tmp && tmp <= 122) || (65 <= tmp && tmp <= 90)) {
            s[i] = String.fromCharCode(tmp);
        } else {
            s[i] = String.fromCharCode(tmp - 26);
        }
    }
    
    answer = s.join('');
    return answer;
}