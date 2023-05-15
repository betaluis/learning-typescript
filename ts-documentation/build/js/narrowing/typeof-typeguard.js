"use strict";
const printAll = (str) => {
    if (typeof str === "object") {
        let index;
        for (const s of str) {
            index = 0;
            console.log({
                index: s,
            });
            index++;
        }
    }
    else if (typeof str === "string") {
        console.log(str);
    }
    else {
        console.log("error");
    }
};
printAll("hello");
printAll(["hello", "world"]);
