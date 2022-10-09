// fs 모듈을 이용하는 방법

// fs 모듈을 활용한 한 줄로 입력 받기 (백준 제출용)
/*
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
*/

// fs 모듈을 활용한 여러 줄 입력 받기 (백준 제출용)
/*
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}

for (let i = 0; i < numbers.length; i++){
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);

  console.log(num1 + num2);
}
*/

// fs 모듈을 이용하는 방법(vscode에서 테스트용)
// 여러줄 입력 코드에서 걍로를 /dev/stdin에서 txt위치로 바꾼다
// 아래는 두 개 값을 더하는 예제이다.
/*
let input = require('fs').readFileSync('../예제.txt').toString().split('\n');
let count = Number(input[0]);
let answerStr = '';

for(let i = 1; i <= count; i++){
    let num = input[i].split(" ");
    answerStr += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answerStr);
*/