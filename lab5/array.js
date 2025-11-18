function array() {
    let data = []
    function arr(method, ...args) {
        switch (method) {
            case "push":
                return data.push(...args);
            case "pop":
                return data.pop();
            case "get":
                return args.length ? data[args[0]] : data;
        }
    }
    arr.push = (...args) => data.push(...args);
    arr.pop = () => data.pop();
    arr.get = (i) => (i === undefined ? data : data[i]);

    return arr;
}

const a = array()

a.push("home")
a.push("joke")
a.push("markus")
a.pop()

console.log(a.get(0))
console.log(a.get())
