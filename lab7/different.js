'use strict'

const array1 = [1, 2, 3, 4, 5]
const array2 = [4, 5, 6, 7, 8]

function difference(list1, list2) {
    const result = [];
    for (const item of list1) {
        if (!list2.includes(item)) {
            result.push(item)
        }
    }
    return result
}

console.log(difference(array1, array2))
console.log(difference(array2, array1))