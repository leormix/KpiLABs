const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

function age(list) {
    const result = {};
    for (const person in list) {
        const born = list[person].born;
        const died = list[person].died;
        result[person] = died - born
    }

    console.log(result);
    return result;
}

age(persons)