'use strict';

function average(a, b) {
    return (a + b) / 2;
};

function square(x) {
    return x ** 2;
};

function cube(x) {
    return x * x * x;
}

function calculate() {
    let list = [];
    for (let i = 0; i <= 9; i++) {
        const sqr = square(i);
        const cub = cube(i);
        const avrg = average(sqr, cub);
        list.push(avrg);
    }
    return list;
};

console.dir(average(2, 6))
console.dir(square(7))
console.dir(cube(8))
console.dir(calculate())