// 바탕화면 정리
// https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
    var answer = [-1, -1, -1, -1];
    for(let i = 0; i < wallpaper.length; i++) {
        if(wallpaper[i].includes('#')) {
            if(answer[0] === -1) {
                answer[0] = i;
            }
            if(answer[2] === -1 || i >= answer[2]) {
                answer[2] = i + 1;
            }
        }
        for(let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j] === '#') {
                if(answer[1] === -1 || j < answer[1]) {
                    answer[1] = j;
                }
                if(answer[3] === -1 || j >= answer[3]) {
                    answer[3] = j + 1;
                }
            }
        }
    }
    return answer;
}