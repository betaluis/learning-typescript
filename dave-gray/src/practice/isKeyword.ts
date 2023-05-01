interface Pet {
    name: string;
    type: string;
}

interface Fish extends Pet {
    swim: boolean;
}

interface Bird extends Pet {
    fly: boolean;
}

// In this example, we have a function called isFish
// that takes a parameter called pet. The pet parameter
// is of type Fish | Bird, which means it can be either
// a Fish or a Bird. The pet is Fish syntax is called a
// type predicate and it tells TypeScript that if the
// function returns true, the pet parameter is of type
// Fish.

const isFish = (pet: Fish | Bird): pet is Fish => {
    return (pet as Fish).swim !== undefined;
}

// More examples

const isNum = (x: any): x is number => {
    return typeof x === "number";
}

const isStr = (x: any): x is string => {
    return typeof x === "string";
}

const padLeft = (value: string, padding: string | number) => {
    if (isNum(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if (isStr(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '\${padding}'`);
}
