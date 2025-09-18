'use strict'

const range = (min, max) => {
    let key = []
    for (min; min <= max; min++) {
        key.push(min)
    }
    return key
}

console.dir(range(20, 100))