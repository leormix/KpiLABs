'use strict'

const array = [1, 2, 2, 2, 3, 5, 5, 5, 6]

function unique(list) {
    const result = []
    for (const item of list) {
        if (!result.includes(item)) {
            result.push(item)
        }
    }
    return result
}

console.log(unique(array, 2))
