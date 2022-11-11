// 영어 끝말잇기
// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
    var answer = [0 , 0];
    let arr = [];
    let tmp1 = '';
    let tmp2 = '';
    
    for(let i = 0; i < words.length; i++) {
        if(arr.indexOf(words[i]) != -1) {
            answer = [i % n + 1, Math.floor(i / n) + 1];
            break;
        } else if(arr.length > 0) {
            tmp1 = arr[arr.length - 1].split('');
            tmp2 = words[i].split('');
            if(tmp1[tmp1.length - 1] != tmp2[0]) {
                answer = [i % n + 1, Math.floor(i / n) + 1];
                break;
            }
        }
        arr.push(words[i]);
    }
    
    return answer;
}