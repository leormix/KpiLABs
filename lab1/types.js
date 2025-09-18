let list = [true, 'hello', 5, 12, -200, false, 12.2, 'word', 'home', 11, 23.2]

const types = {

}

function parsing() {
    for (const item of list) {
        let type = typeof item;
        types[type] = types[type] + 1 || 1
    }
}

parsing()
console.dir(types)
