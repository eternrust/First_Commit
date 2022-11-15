// 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    var answer = 0;
    s = s.split('zero').join('0').split('one').join('1').split('two').join('2')
         .split('three').join('3').split('four').join('4').split('five').join('5')
         .split('six').join('6').split('seven').join('7').split('eight').join('8').split('nine').join('9');
    answer = Number(s);
    return answer;
}