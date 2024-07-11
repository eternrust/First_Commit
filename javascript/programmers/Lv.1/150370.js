// 개인정보 수집 유효기간
// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
    var answer = [];
    let term = {};
    today = today.split('.').map(Number);
    today = ((today[0] * 12 + today[1]) * 28) + today[2];
    terms.forEach((value) => {
        let [name, v] = value.split(' ');
        term[name] = Number(v);
    });
    
    for (let i = 0; i < privacies.length; i++) {
        let [time, tm] = privacies[i].split(' ');
        time = time.split('.').map(Number);
        time = ((time[0] * 12 + time[1] + term[tm]) * 28) + time[2];
        if(time <= today){
            answer.push(i + 1);
        }
    }
    return answer;
}