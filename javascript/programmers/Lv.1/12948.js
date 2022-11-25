// 핸드폰 번호 가리기
// https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
    var answer = '';
    let pn = phone_number.split('');
    while(pn.length > 4) {
        answer += '*';
        pn.shift();
    }
    answer += pn.join('');
    return answer;
}