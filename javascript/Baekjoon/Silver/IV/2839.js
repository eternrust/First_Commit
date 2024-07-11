// 설탕 배달
// https://www.acmicpc.net/problem/2839

let input = Number(require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim());

let five = 0;
let three = 0;
let result = 0;

while(input) {
    if(input - 5 >= 0) {
        five++;
        input -= 5;
    }
    else if(input - 3 >= 0) {
        three++;
        input -= 3;
    }
    else {
        if(five) {
            input += 2;
            five--;
            three++;
        } else {
            result = 1;
            break;
        }
    }
}

console.log(result ? -1 : five + three);