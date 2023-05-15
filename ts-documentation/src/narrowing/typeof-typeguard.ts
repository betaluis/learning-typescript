const printAll = (str: string[] | string) => {
    if (typeof str === "object") {
        let index: number;
        for (const s of str) {
            index = 0;
            console.log({
                index: s,
            })
            index++;
        }
    } else if (typeof str === "string") {
        console.log(str);
    } else {
        console.log("error");
    }
}

printAll("hello");

printAll(["hello", "world"]);
