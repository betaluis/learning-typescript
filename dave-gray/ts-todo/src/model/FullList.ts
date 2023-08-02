import ListItem from './ListItem';

interface List {
    list: ListItem[];
    load(): void;
    save(): void;
    clear(): void;
    remove(id: number): void;
    add(itemObj: ListItem): void;
}

export default class FullList implements List {

    static instance: FullList = new FullList();

    private constructor(private _list: ListItem[] = []) {}

    get list(): ListItem[] {
        return this._list;
    }

    load() {
        const storedList = localStorage.getItem("list");
        if (typeof storedList !== "string") return

        const parsed: { _id: number; _item: string; _done: boolean }[] = JSON.parse(storedList);

        parsed.forEach(item => {
            const newListItem = new ListItem(item._id, item._item, item._done)
            FullList.instance.add(newListItem)
        })
    }

    save(): void {
        localStorage.setItem("list", JSON.stringify(this._list));
    }

    clear(): void {
        this._list = [];
        this.save();
    }

    add(item: ListItem): void {
        this._list.push(item);
        this.save();
    }

    remove(id: number): void {
        this._list = this._list.filter(item => item.id !== id);
        this.save();
    }
}
