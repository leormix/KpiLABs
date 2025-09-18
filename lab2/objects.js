'use strict'

const fn = () => {
    const constVar = { name: "Nazariy" };
    let letVar = { name: "Nazariy" };

    constVar.name = "Bogdan";
    letVar.name = "Bogdan";

    // constVar = { age: 11 }; Не можна змінювати константу
    letVar = { age: 11 };


    console.dir(constVar)
    console.dir(letVar)

}

const createUser = (name, city) => {
    const list = { name: name, city: city }
    return list
}

console.dir(createUser("Marcus Aurelius", "Roma"))
fn()

