import { isObj } from "../isObj/index"

var isTrue = <T>(arg: T): { arg: T, is: boolean } => {

    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false,
        }
    }

    if (isObj(arg) && !Object.keys(arg as keyof T)) {
        return {
            arg,
            is: false
        }
    }

    return { arg, is: !!arg }
}
