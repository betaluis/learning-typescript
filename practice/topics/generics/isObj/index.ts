
// Utility Function to check if is obj

export var isObj = <T>(arg: T): boolean => {
    return (
        typeof arg === "object" &&
            !Array.isArray(arg) &&
            arg !== null
    );
}
