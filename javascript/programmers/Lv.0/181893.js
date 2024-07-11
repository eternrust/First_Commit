// 배열 조각하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function solution(arr, query) {
    let start = 0;
    let end = arr.length;
    for (let i in query) {
        if(i % 2) {
            start += query[i];
        } else {
            end = start + query[i];
        }
    }
    return start == end ? [-1] : arr.slice(start, end);
}