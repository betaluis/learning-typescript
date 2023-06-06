const createScore = (team: string, points: number) => {
    return { team, points, }
}

type Score = ReturnType<typeof createScore>
type ScoreParams = Parameters<typeof createScore>;

const newScore: ScoreParams = ["Brazil", 4];

const final: Score = createScore(...newScore);

console.log(final);
