// For
function sums1(...args) {
    let result = 0;
    for (let i = 0; i < args.length + 1; i++) {
        result += i;
    }
    console.log(result)
    return result
}


// For of
function sums2(...args) {
    let result = 0;
    for (const nums of args) {
        result += nums;
    }
    console.log(result);
    return result;
}

// While    
function sums3(...args) {
    let result = 0;
    let i = 0;
    while (i < args.length) {
        i++
        result += i;
    }
    console.log(result)
    return result;

}
// Do while    
function sums4(...args) {
    let result = 0;
    let i = 0;

    // if (args.length > 0)
    do {
        i++
        result += i;
    } while (i < args.length)
    console.log(result)
    return result;
}
// reduce    
function sums5(...args) {
    const result = args.reduce((acc, val) => acc + val, 0)
    console.log(result)
    return result;
}



sums1(1, 2, 3, 4, 5);
sums2(1, 2, 3, 4, 5);
sums3(1, 2, 3, 4, 5);
sums4(1, 2, 3, 4, 5);
sums5(1, 2, 3, 4, 5, 6);