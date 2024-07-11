// 문자열 나누기
// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
    var answer = [];
    let base = 0;
    let x = s[0];
    let xCnt = 1;
    let nCnt = 0;
    
    for(let i = 1; i < s.length; i++) {
        if(xCnt === nCnt) {
            answer.push(s.slice(base, i))
            base = i;
            xCnt++;
            x = s[i];
        }
        else if(x === s[i]) {
            xCnt++;
        } else {
            nCnt++;
        }
    }
    answer.push(s.slice(base, s.length));
    
    return answer.length;
}