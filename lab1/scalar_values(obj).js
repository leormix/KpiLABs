'use strict';

const obj = { n: 5 };

export function inc(obj) {
    obj.n++;
}

inc(obj)
console.log(obj)