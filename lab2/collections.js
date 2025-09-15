'use strict';

const phoneBook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: "Yuliy Cesar", phone: "+380267502618" },
    { name: "Napoleon Bonapart", phone: "+3808764576" },
    { name: "Stepan Bandera", phone: "+38025252452" },
];

function findPhoneByNumber(name) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone;
        }

    }

    return 0;
}
console.dir(findPhoneByNumber("Stepan Bandera"))
console.dir(findPhoneByNumber('Marcus Aurelius'))
console.dir(findPhoneByNumber("Napoleon Bonapart"))
console.dir(findPhoneByNumber("Yuliy Cesar"))
console.dir(findPhoneByNumber("Tuganskih Oleksandr"))