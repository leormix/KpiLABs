
function compose(...fns) {

    const errorHandlers = [];

    const composedFunction = function (initialValue) {
        let result = initialValue;

        try {

            for (let i = fns.length - 1; i >= 0; i--) {
                const currentFunc = fns[i];

                result = currentFunc(result);
            }

            return result;
        } catch (error) {

            errorHandlers.forEach(handler => handler(error));

            return undefined;
        }
    };

    composedFunction.on = function (event, handler) {
        if (event === 'error') errorHandlers.push(handler);
    };

    return composedFunction;
}



const double = (x) => x * 2;
const addTen = (x) => x + 10;
const throwError = (x) => { throw new Error("Error"); };

const cleanCalc = compose(double, addTen);
console.log(cleanCalc(5));


const brokenCalc = compose(double, throwError, addTen);


brokenCalc.on('error', (e) => {
    console.log(`${e.message}`);
});

const result = brokenCalc(5);

console.log(result);