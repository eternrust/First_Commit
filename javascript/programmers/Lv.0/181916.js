// 주사위 게임 3
// https://school.programmers.co.kr/learn/courses/30/lessons/181916

function solution(a, b, c, d) {
    var answer = 0;
    let tmp = [a, b, c, d];
    let arr = [...new Set(tmp)];
    if(arr.length === 1) {
        answer = 1111 * arr[0];
    } else if(arr.length === 2) {
        let len = tmp.filter((v) => v === arr[0]).length;
        if(len % 2) {
            answer = len % 3 ?
                Math.pow((10 * arr[1] + arr[0]), 2)
                : Math.pow((10 * arr[0] + arr[1]), 2);
        } else {
            answer = (arr[0] + arr[1]) * Math.abs(arr[0] - arr[1]);
        }
    } else if(arr.length === 3) {
        let len = tmp.filter((v) => v === arr[0]).length;
        if(len === 2) {
            answer = arr[1] * arr[2];
        } else {
            len = tmp.filter((v) => v === arr[1]).length;
            if(len === 2) {
                answer = arr[0] * arr[2];
            } else {
                answer = arr[0] * arr[1];
            }
        }
    } else {
        answer = Math.min.apply(this, tmp);
    }
    return answer;
}