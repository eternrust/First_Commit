// 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function match(ch1, ch2) {
    if((ch1 == '(' && ch2 == ')') || (ch1 == '{' && ch2 == '}') || (ch1 == '[' && ch2 == ']')) {
        return true;
    }
    return false;
}

function solution(s){
    var answer = true;
    let arr = [];
    let ch;
    s = s.split('');
    for(let i = 0; i < s.length; i++) {
        ch = s[i];
        switch(ch) {
            case '(':
            case '{':
            case '[':
                arr.push(ch);
                break;
            case ')':
            case '}':
            case ']':
                answer = match(arr.pop(), ch);
                break;
        }
        
        if(!answer) {
            break;
        }
    }
    if(arr.length) {
        answer = false;
    }

    return answer;
}