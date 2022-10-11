// 시간 관리
// https://www.acmicpc.net/problem/1263

let fs = require('fs');
let input = fs.readFileSync('../../예제.txt').toString().split('\n');

let count = input[0].replace('//r$/','');
let num = [];
let i;
for(i = 1; i <= count; i++) {
    num = [...num, input[i].split(' ')];
    num[i - 1][0] = Number(num[i - 1][0]);
    num[i - 1][1] = Number(num[i - 1][1].replace(/\n|\r|\s*/g, ""));
}

num.sort(function(a, b)  {
    return a[1] - b[1];
});

let error = 0;
function result(cnt) {
    let time = cnt;
    for(let i = 0; i < count; i++) {
        time += num[i][0];
        if(time > num[i][1]) {
            error = 1;
            break;
        }
    }
}

for(i = 0; i <= (num[0][1] - num[0][0]); i++) {
    result(i);
    if(error) {
        if(i) {
            console.log(i - 1);
            break;
        } else {
            console.log(-1);
            break;
        }
    }
}

if(!error) {
    console.log(i - 1);
}