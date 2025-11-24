'use strict'

const array = [1, 2, 3, 4, 5, 6, 7]

function removeElements(list, ...x) {
    const result = [];
    for (const item of list) {
        if (!x.includes(item)) result.push(item)
    }
    return result;
}

console.log(removeElements(array, 3, 1, 2, 7))