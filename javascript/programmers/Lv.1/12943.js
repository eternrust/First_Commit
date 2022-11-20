// 콜라츠 추측
// https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    var answer = 0;
    let i = 0;
    
    for(; i < 500 && num != 1; i++) {
        if(num % 2) num = num * 3 + 1;
        else num = num / 2;
    }
    
    if(i == 500) answer = -1;
    else answer = i;
    
    return answer;
}