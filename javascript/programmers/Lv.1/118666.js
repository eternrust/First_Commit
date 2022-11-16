// 성격 유형 검사하기
// https://school.programmers.co.kr/learn/courses/30/lessons/118666

let first = [0, 0];
let second = [0, 0];
let three = [0, 0];
let four = [0, 0];

function Add(ch, num) {
    let char =  ch.split('').sort().join('').toString();
    if(char !== ch) num = 8 - num;
    switch(char) {
        case 'RT':
            if(num < 4) {
                num = 4 - num;
                first[0] += num;
            } else if(num > 4) {
                num = num - 4;
                first[1] += num;
            }
        break;
        case 'CF':
            if(num < 4) {
                num = 4 - num;
                second[0] += num;
            } else if(num > 4) {
                num = num - 4;
                second[1] += num;
            }
        break;
        case 'JM':
            if(num < 4) {
                num = 4 - num;
                three[0] += num;
            } else if(num > 4) {
                num = num - 4;
                three[1] += num;
            }
        break;
        case 'AN':
            if(num < 4) {
                num = 4 - num;
                four[0] += num;
            } else if(num > 4) {
                num = num - 4;
                four[1] += num;
            }
        break;
    }
}

function result() {
    let arr = [];
    
    arr.push(first[0] >= first[1] ? 'R' : 'T');
    arr.push(second[0] >= second[1] ? 'C' : 'F');
    arr.push(three[0] >= three[1] ? 'J' : 'M');
    arr.push(four[0] >= four[1] ? 'A' : 'N');
    
    return arr.join('');
}

function solution(survey, choices) {
    var answer = '';
    for(let i = 0; i < survey.length; i++) {
        Add(survey[i], choices[i]);
    }
    
    answer = result();
    return answer;
}