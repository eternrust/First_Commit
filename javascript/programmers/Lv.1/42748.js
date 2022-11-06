// K번째수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    var answer = [];
    let tmp = [];
    for(let i = 0; i < commands.length; i++) {
        tmp = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b);
        answer.push(tmp[commands[i][2] - 1]);
    }
    return answer;
}