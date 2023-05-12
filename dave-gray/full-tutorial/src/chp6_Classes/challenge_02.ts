class School {
    static count: number = 0;

    static getCount(): number {
        return School.count;
    }

    public id: number;

    constructor(
        public name: string, 
    ){
        this.name = name;
        this.id = ++School.count;
    }
}

const francone = new School("Francone");
const campbell = new School("Campbell");
const ridge = new School("Cy-Ridge");

console.log(School.getCount());
console.log(campbell.id);
