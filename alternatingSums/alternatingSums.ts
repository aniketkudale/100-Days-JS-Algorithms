function alternatingSums(a: number[]): number[] {
    const result: number[] = [];
    let teamA: number = 0;
    let teamB: number = 0;

    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            teamA += a[i]
        } else {
            teamB += a[i];
        }
    }
    return [teamA, teamB];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))