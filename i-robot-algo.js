
const returnAmountOfBatchesOfOnes = twoDarray => {
    xAxisSize = twoDarray[0].length
    yAxisSize = twoDarray.length
    coloredSpots = {}
    let result = 0

    const spread = (twoDarray, y, x) => {
        if (x < 0 || x >= xAxisSize || y < 0 || y >= yAxisSize) return
        if (twoDarray[y][x] === "0" || coloredSpots[`${y},${x}`] === true) return

        coloredSpots[`${y},${x}`] = true
        spread(twoDarray, y + 1, x)
        spread(twoDarray, y - 1, x)
        spread(twoDarray, y, x + 1)
        spread(twoDarray, y, x - 1)
    }

    for (let i = 0; i < yAxisSize; i++)
        for (let j = 0; j < xAxisSize; j++) {
            if (twoDarray[i][j] === "0" || coloredSpots[`${i},${j}`] === true) continue
            spread(twoDarray, i, j)
            result++
        }
    return result
}





