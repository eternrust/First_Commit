// 제일 작은 수 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    var answer = [];
    let removed = arr.indexOf(Math.min.apply(null, arr));
    
    answer = arr.filter((item, index) => index != removed);
    if(answer.length == 0) answer = [-1];
        
    return answer;
}