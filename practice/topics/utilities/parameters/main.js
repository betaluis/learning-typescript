var createScore = function (team, points) {
    return { team: team, points: points, };
};
var newScore = ["Brazil", 4];
var final = createScore.apply(void 0, newScore);
console.log(final);
