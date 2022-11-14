// 최소직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    var answer = 0;
    let max = 0;
    let min = 0;
    let tmpMax = 0;
    let tmpMin = 0;
    for(let i = 0; i < sizes.length; i++) {
        tmpMax = Math.max(sizes[i][0], sizes[i][1]);
        tmpMin = Math.min(sizes[i][0], sizes[i][1]);
        if(tmpMax > max) {
            max = tmpMax;
        }
        if(tmpMin > min) {
            min = tmpMin;
        }
    }
    answer = max * min;
    return answer;
}