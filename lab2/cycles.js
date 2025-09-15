'use strict';

function range(start, end) {
    let list = [];
    for (let i = start; i <= end; i++) {
        list.push(i);
    }
    return list;
};

function rangeOdd(start, end) {
    let list = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) {
            list.push(i);
        }
    }
    return list;
}

console.log(range(15, 30))
console.log(rangeOdd(15, 30))