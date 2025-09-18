'use strict'

const average = (a, b) => (a + b) / 2;

const square = (x) => x ** 2

const cube = (x) => x ** 3

const calculate = () => {
    const array = []
    for (let i = 0; i <= 9; i++) {
        const x = average(cube(i), square(i))
        array.push(x)
    }
    return array;
};

console.dir(average(3, 7))
console.dir(square(2))
console.dir(cube(2))

console.dir(calculate())