'use strict';

const contract = (fn, ...types) => (...args) => {
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        const def = types[i];
        const name = def.name.toLowerCase();
        if (typeof arg !== name) {
            throw new TypeError(`${name} expected`);
        }
    }
    const res = fn(...args);
    const def = types[types.length - 1];
    const name = def.name.toLowerCase();
    if (typeof res !== name) {
        throw new TypeError(`${name} expected`);
    }
    return res;
};


const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);

try {
    const res = addNumbers(2, 3);
    console.log(res);
} catch (e) {
    console.log(e.message);
}

try {
    const res = concatStrings('Hello ', 'world!');
    console.log(res);
} catch (e) {
    console.log(e.message);
}