import ListItem from './ListItem';

interface List {
    list: ListItem[];
    load(): void;
    save(): void;
    clear(): void;
    add(item: ListItem): void;
    remove(id: string): void;
}

export default class FullList implements List {

    static instance: FullList = new FullList();

    private constructor(private _list: ListItem[] = []) {}

    get list(): ListItem[] {
        return this._list;
    }

    load(): void {
        const list: string | null = localStorage.getItem('list');
        if (typeof list === 'string') return;
        
        const parsedList: { id: string, item: string, checked: boolean }[] = JSON.parse(list);

        parsedList.forEach(item => {
            const listItem: ListItem = new ListItem(item.id, item.item, item.checked);
            this._list.push(listItem);
            FullList.instance.add(listItem);
        });
    }
            

    save(): void {
        localStorage.setItem('list', JSON.stringify(this._list));
    }

    clear(): void {
        this._list = [];
        this.save();
    }

    add(item: ListItem): void {
        this._list.push(item);
        this.save();
    }

    remove(id: string): void {
        this._list = this._list.filter(item => item.id !== id);
        this.save();
    }

}
