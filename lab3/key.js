'use strict'

const chars = '!"№;%:?*_+,<>@qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHKLZXCVBNM1234567890'

function generateKey(length, characters) {

    let password = '';
    for (let i = 0; i < length; i++) {
        randomNum = Math.floor(Math.random() * characters.length);
        password += characters[randomNum];
    }
    return password;
}

console.log(generateKey(16, chars))

