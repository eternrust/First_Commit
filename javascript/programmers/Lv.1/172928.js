// 공원 산책
// https://school.programmers.co.kr/learn/courses/30/lessons/172928

const search = (map, start, end, j, d = 'row') => {
    if(d === 'column') {
        for(let i = start; i <= end; i++) {
            if(map[i][j] === 'X') return 0;
        }
    } else {
        for(let i = start; i <= end; i++) {
            if(map[j][i] === 'X') return 0;
        }
    }
    return 1;
}

function solution(park, routes) {
    var answer = [];
    let map = []
    let place = [-1, -1]
    let width = park[0].length;
    let height = park.length;
    for(let i = 0; i < width; i++) {
        map[i] = park[i].split('');
        for(let j = 0; j < width && place[0] === -1  && place[1] === -1; j++) {
            if(map[i][j] === 'S') {
                place = [i, j];
            }
        }
    }
    
    for(let value of routes) {
        let [d, num] = value.split(' ');
        num = Number(num);
        if(d === 'E' && place[1] + num < width) {
            if(search(map, place[1], place[1] + num, place[0])) {
                place[1] = place[1] + num;
            }
        } else if(d === 'S' && place[0] + num < height) {
            if(search(map, place[0], place[0] + num, place[1], 'column')) {
                place[0] = place[0] + num;
            }
        } else if(d === 'W' && place[1] - num >= 0) {
            if(search(map, place[1] - num, place[1], place[0])) {
                place[1] = place[1] - num;
            }
        } else if(d === 'N' && place[0] - num >= 0) {
            if(search(map, place[0] - num, place[0], place[1], 'column')) {
                place[0] = place[0] - num;
            }
        }
    }
    return place;
}