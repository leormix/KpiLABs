'use strict'
    
const array = [1, 2, 2, 2, 3, 5, 5, 5, 6]

function unique(array) {
    const result = []
    for (item of array) {
        if (!result.includes(item)) {
            result.push(item)
        }
    }
    return result
}

console.log(unique(array, 2))