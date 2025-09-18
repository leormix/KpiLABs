const phoneNumbers = {
    Stepan: "+123123123123",
    Napoleon: "+3802363681",
    Yulia: "+1212231233434"
};


const findPhoneByName = (name) => phoneNumbers[name];
console.dir(findPhoneByName("Stepan"))