// 1로 만들기
// https://www.acmicpc.net/problem/1463

/*
    후기
    DP라는 유형도 모르고 무작정 시작했다.
    그런데 답을 하도 모르겠어서 검색해보니
    코드란 이렇게 짜야한다는 것을 알았다.
    앞으로 DP 유형 문제를 많이 해봐야겠다.
    
    https://gurtn.tistory.com/51
    이건 찾아본 것 중 가장 깔끔한 코드이고,
    위에 쓰여 있는 것이 가져온 사이트이다.
    
    이건 내가 한 코드가 아니라는 자존심이 있기에 올리지 않겠다.
    DP 유형을 잘 풀 수 있게 될 때
    다시 찾아와 스스로 풀면 그 때 백준에 정답을 올릴 것이다.
*/

let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);
let data = new Array(num +1).fill(0);

for(let i = 2; i <= num; i++) {
    data[i] = data[i - 1] + 1;

    if(i % 2 == 0) {
        data[i] = Math.min(data[i], data[i / 2] + 1);
    }

    if(i % 3 == 0) {
        data[i] = Math.min(data[i], data[i / 3] + 1);
    }
}

console.log(data[num]);