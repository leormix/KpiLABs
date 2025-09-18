'use strict';

const obj = { n: 5 };

export function inc(arg) {
    arg.n++;
}

inc(obj)
console.log(obj)