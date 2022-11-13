// 소수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
    var answer = 0;
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);
    for(let i = 2 ; i * i <= n; i++){
        if(arr[i]){
            for(let j = i * i; j <= n; j+=i){
                arr[j] = false;
            }
        }
    }
    answer = arr.filter(e => e != false).length;
    return answer;
}