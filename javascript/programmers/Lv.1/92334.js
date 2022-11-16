// 신고 결과 받기
// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    var answer = [];
    report = Array.from(new Set(report));
    let Data = [];
    for(let i = 0; i < id_list.length; i++) {
        Data.push(id_list[i], 0, []);
    }
    
    for(let i = 0; i < report.length; i++) {
        report[i] = report[i].split(' ');
        let chacking = Data.indexOf(report[i][0]);
        Data[chacking + 2].push(report[i][1]);
        
        let adding = Data.indexOf(report[i][1]);
        Data[adding + 1]++;
    }
    
    for(let i = 0; i < Data.length; i += 3) {
        let count = 0;
        for(let j = 0; j < Data[i + 2].length; j++) {
            let chacking = Data.indexOf(Data[i + 2][j]);
            if(Data[chacking + 1] >= k) count++;
        }
        answer.push(count);
    }
    
    return answer;
}