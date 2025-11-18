function array() {
    let data = [];

    function arr(i) {
        if (i === undefined) {
            return data
        }
        return data[i];
    }

    arr.push = (...args) => data.push(...args);
    arr.pop = () => data.pop();

    return arr;
}

const a = array();

a.push("home");
a.push("joke");
a.push("markus");
a.pop();

console.log(a(0));
console.log(a()); 
