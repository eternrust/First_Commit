// 신규 아이디 추천
// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
    var answer = new_id.toLowerCase()
                    .replace(/[^\w\.\-]/g, '')
                    .replace(/[\.]{2,}/g, '.')
                    .replace(/^\./, '')
                    .replace(/\.$/, '');
    if(answer === '') answer = 'a'
    if(answer.length >= 16)
        answer = answer.slice(0, 15).replace(/\.$/, '');
    else if(answer.length <= 2) {
        for(let i = answer.length; i < 3; i++) {
            answer += answer[i - 1];
        }
    }
    
    return answer;
}