// 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
    var answer = 45;
    for(let i = 0; i < numbers.length; i++) {
        answer -= numbers[i];
    }
    return answer;
}