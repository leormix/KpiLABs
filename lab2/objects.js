'use strict';

function test() {
    const obj1 = { name: "" };
    let obj2 = { name: "" };
    obj2.name = "Nazariy";
    obj2 = { year: 2008 };
    // obj1.name = "Nazariy"; 
    // const не може змінюватись
}

function createUser(name, city) {
    return { name, city };
}

console.dir(createUser("Marcus Aurelius", "Roma"))

