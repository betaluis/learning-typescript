interface User {
    name: string;
    email: string;
    id: number;
    address: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.json();
        }).catch(err => {
            if (err instanceof Error) console.log(err.message);
        })
    return data;
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(user => console.log(user));
