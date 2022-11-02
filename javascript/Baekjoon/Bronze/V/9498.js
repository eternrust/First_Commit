// 시험 성적 (새싹)
// https://www.acmicpc.net/problem/9498

let input = Number(require('fs').readFileSync('../../예제.txt').toString().replace(/\r*/g, "").trim());

if(90 <= input && input <= 100) {
    console.log('A');
}
else if(80 <= input && input < 90) {
    console.log('B');
}
else if(70 <= input && input < 80) {
    console.log('C');
}
else if(60 <= input && input < 70) {
    console.log('D');
}
else {
    console.log('F');
}