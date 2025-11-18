const seq = (...args) => {
    let funcs = args.slice();
    const nextStep = function (...args) {
        if (typeof args[0] === "number") {
            return funcs.reduceRight((acc, fn) => fn(acc), args[0]);
        }
        else {
            funcs.push(...args);
            return nextStep;
        }
    }
    return nextStep;
}