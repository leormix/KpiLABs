let list = [true, 'hello', 5, 12, -200, false, 12.2, 'word', 'home', 11, 23.2]

let types = {
    number: 0,
    string: 0,
    boolean: 0,
}

export function parsing(exlist) {
    for (const item of list) {
        let type = typeof item;
        if (type in types) {
            types[type]++
        }
    }
    return exlist
}

console.dir(parsing(types))
