'use strict'

const array = [1, 2, 3, 4, 5, 6, 7]

function removeElement(list, x) {
    const result = [];
    for (const item of list) {
        if (item !== x) result.push(item)
    }
    return result
}

console.log(removeElement(array, 5))