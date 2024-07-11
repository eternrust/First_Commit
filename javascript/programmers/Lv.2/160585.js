// 혼자서 하는 틱택토
// https://school.programmers.co.kr/learn/courses/30/lessons/160585

function solution(board) {
    let OCnt = 0;
    let XCnt = 0;
    let OChk = 0;
    let XChk = 0;
    
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(board[i][j] === 'O') {
                OCnt++;
            } else if(board[i][j] === 'X') {
                XCnt++;
            }
        }
    }
    
    for(let i = 0; i < 3; i++) {
        if(board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            if(board[i][0] === 'O') {
                OChk++;
            } else if(board[i][0] === 'X') {
                XChk++;
            }
        }
    }
    
    for(let i = 0; i < 3; i++) {
        if(board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            if(board[0][i] === 'O') {
                OChk++;
            } else if(board[0][i] === 'X') {
                XChk++;
            }
        }
    }
    
    if(board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        if(board[0][0] === 'O') {
            OChk++;
        } else if(board[0][0] === 'X') {
            XChk++;
        }
    }
    
    if(board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        if(board[0][2] === 'O') {
            OChk++;
        } else if(board[0][2] === 'X') {
            XChk++;
        }
    }
    if(OCnt < XCnt || OCnt > XCnt + 1) return 0;
    if(OChk >= 1 && XChk >= 1) return 0;
    if(OChk == 2 && OCnt - XCnt === 1) return 1;
    if((OChk == 1 && OCnt == XCnt) || (XChk === 1 && OCnt > XCnt)) return 0;
    return 1;
}