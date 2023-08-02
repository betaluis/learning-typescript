import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement
    clear(): void;
    render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {

    static instance: DOMList = new ListTemplate();

    ul: HTMLUListElement;

    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = " "
    }

    render(fullList: FullList): void {
        this.clear() // clear so we don't duplicate

        // Create markup for each item
        // li[class="item"]>input#1[type="checkbox" tabindex="0"]>label[for="2"]{eat}
        fullList.list.forEach(item => {
            const li = document.createElement("li") as HTMLLIElement
            li.className = "item"

            const check = document.createElement("input") as HTMLInputElement
            check.type = "checkbox"
            check.id = `${item.id}`
            check.tabIndex = 0
            check.checked = item.done
            li.append(check)

            check.addEventListener("change", () => {
                item.done = !item.done
                fullList.save()
            })

            const label = document.createElement("label") as HTMLLabelElement
            label.htmlFor = `${item.id}`
            label.textContent = item.name
            li.append(label)

            const button = document.createElement("button") as HTMLButtonElement
            button.className = "button"
            button.textContent = "X"
            li.append(button)

            button.addEventListener("click", () => {
                if (item !== null) fullList.remove(Number(item.id))
                this.render(fullList)
            })

            this.ul.append(li)
        })
    }

}
