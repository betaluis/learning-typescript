const outerFunction = (): () => void => {
    const variable: string = "This is in the outer function";

    const innerFunction = (): void => {
        console.log(variable)
    }

    return innerFunction;
}

const closure: () => void = outerFunction();

closure();
