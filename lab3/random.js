'use strict'

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Math.floor - округляє до меншого числа а Math.random() - дає рандомне число від 0(включаючи його) до 1(не включаючи)

console.log(random(10, 100))
