'use strict'

const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    },
    notFunc: 123
};


function main(obj) {
    let result = [];
    for (let key of Object.keys(obj)) {
        if (typeof obj[key] === 'function') {
            result.push([key, obj[key].length])
        }
    };
    return result;
}

console.table(main(iface));