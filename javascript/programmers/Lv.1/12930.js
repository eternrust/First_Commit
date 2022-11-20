// 이상한 문자 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    var answer = '';
    s = s.split(' ');
    
    for(let i = 0; i < s.length; i++) {
        s[i] = s[i].split('');
        for(let j = 0; j < s[i].length; j++) {
            if(j % 2) s[i][j] = s[i][j].toLowerCase();
            else s[i][j] = s[i][j].toUpperCase();
        }
        s[i] = s[i].join('');
    }
    
    answer = s.join(' ');
    return answer;
}