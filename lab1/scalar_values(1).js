'use strict';

const a = 5

export function inc(n) {
    return n++;
}

const b = inc(a)
console.dir({ a, b });
