const button = document.querySelector("button") as HTMLButtonElement;
const body = document.querySelector("body") as HTMLBodyElement;

let rgb: [number, number, number] = [0, 0, 0];

const randomNumber = (): number => {
    return Math.floor(Math.random() * 255);
}

button.addEventListener("click", () => {
    rgb = [
        randomNumber(),
        randomNumber(),
        randomNumber()
    ];

    body.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
})

