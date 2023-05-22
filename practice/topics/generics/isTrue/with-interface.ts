import { isObj } from "../isObj"

interface BooleanCheck<T> {
    arg: T,
    is: boolean
}

var isTrue = <T>(arg: T): BooleanCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {
            arg, 
            is: false
        }
    }
    return { arg, is: !!arg }
}
