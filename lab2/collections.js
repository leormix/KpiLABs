'use strict';

const phoneNumbers = [
    { name: "Stepan Bandera", phone: "+123123123123" },
    { name: "Napoleon Bonapart", phone: "+3802363681" },
    { name: "Yullia Timoshenko", phone: "+3811121287" }
]

const findPhoneByName = (name) => {
    for (const obj of phoneNumbers) {
        if (obj.name === name) return obj.phone;
    };
};

console.dir(findPhoneByName("Stepan Bandera"))
console.dir(findPhoneByName("Napoleon Bonapart"))
console.dir(findPhoneByName("Yullia Timoshenko"))
