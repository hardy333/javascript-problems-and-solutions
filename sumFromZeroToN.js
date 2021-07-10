
// fastest one
function sumMath(n){
    return n*(n + 1)/2;
}

// slowest one
// gets Maximum call stack size exceeded error on big numbers
function sumRecursive(n){
    if(n === 0) return 0;
    return n + sumRecursive(n - 1);
}

// second fastest one
function sumIterative(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum += n;
    }
    return sum;
}



let t0, t1;

const number = 10000;

t0 = performance.now();
console.log(sumMath(number));
t1 = performance.now();
console.log("time:", t1 - t0);


t0 = performance.now();
console.log(sumRecursive(number));
t1 = performance.now();
console.log("time: ", t1 - t0);


t0 = performance.now();
console.log(sumIterative(number));
t1 = performance.now();
console.log("time: ", t1 - t0);