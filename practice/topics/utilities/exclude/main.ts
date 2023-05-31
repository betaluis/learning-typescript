type Departments = "HR" | "Sales" | "Marketing" | "Tech Support";

type TargetDepartment = Exclude<Departments, "Marketing">;

type Employees = {
    name: string;
    department: Departments;
}

type noMarketing = {
    name: string,
    department: TargetDepartment,
}


const employees: Employees[] = [
    { name: "Martha", department: "HR" },
    { name: "Luis", department: "Marketing" },
    { name: "Sheryln", department: "HR" },
    { name: "Chris", department: "Sales" }
];

const meeting: noMarketing[] = [
    { name: "Kelly", department: "Sales" },
    { name: "Bob", department: "Tech Support" }
    { name: "Ricky", department: "Marketing" } // Error because this is excluded 
]
