// const prime = (x) => {
//     if(x == 1) return 0;
//     for(let i = 2; i < x; i++) {
//         if(x % i == 0) return 0;
//     }
//     return 1;
// }

// 효율적인 코드
// const prime = (x) => {
//     if(x == 1) return 0;
//     for(let i = 2; i <= x/2; i++) {
//         if(x % i == 0) return 0;
//     }
//     return 1;
// }

// 매우 효율적인 코드
const prime = (x) => {
    if(x == 1) return 0;
    for(let i = 2; i * i<= x; i++) {
        if(x % i == 0) return 0;
    }
    return 1;
}

let result = [];
for(let i = 1; i <= 100; i++) {
    if(prime(i)) result.push(i);
}

console.log(result);