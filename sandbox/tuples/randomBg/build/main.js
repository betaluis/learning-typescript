"use strict";
const button = document.querySelector("button");
const body = document.querySelector("body");
let rgb = [0, 0, 0];
const randomNumber = () => {
    return Math.floor(Math.random() * 255);
};
button.addEventListener("click", () => {
    rgb = [
        randomNumber(),
        randomNumber(),
        randomNumber()
    ];
    body.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
});
