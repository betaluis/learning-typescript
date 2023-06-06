
const createNewAssign = (title: string, points: number) => {
    return { title, points, }
}

type NewAssign = ReturnType<typeof createNewAssign>;

