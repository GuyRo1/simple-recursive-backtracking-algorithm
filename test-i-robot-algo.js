
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

const createData = (xAxisSize=5,yAxisSize=5) => {
    const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

    twoD = new Array(yAxisSize);
    for (let i = 0; i < twoD.length; i++) {
        twoD[i] = new Array(xAxisSize)
        for (let j = 0; j < xAxisSize; j++) {
            if (j % 2 == 0)
                twoD[i][j] = "1"
            else
                twoD[i][j] = "0"
        }

         shuffleArray(twoD[i])
    }
    return twoD

}

const printData = (data)=>{
    let str = ""
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
            str += data[i][j] + ","
        }
        console.log(str)
        str = ""
    }
}


const data = createData()
printData(data)
console.log(returnAmountOfBatchesOfOnes(data));







