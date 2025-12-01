export function CeresSearch(input: string): number {
    let result = 0
    const parsedInput = input.split("\n").map((row) => row.split(""))
    result = WordCount(parsedInput)

    return result
}


function WordCount(grid:string[][]) {
    let count = 0

    const rowsLength = grid.length
    const colsLength = grid[0].length
 
    for (let x = 0; x < rowsLength; x++) {
        for (let y = 0; y < colsLength; y++) {
            for (const [vx, vy] of directions) {
                if (CheckWord(x, y, vx, vy, grid, rowsLength, colsLength))
                { 
                    count++
                }
            }
        }
    }
    return count
}


const CheckWord = (x:number, y:number, vx:number, vy:number, grid:string[][], rowsLength:number, colsLength:number) => {
    const word = "XMAS"
    for (let i = 0; i < word.length; i++) {
        const dx = x + i * vx
        const dy = y + i * vy
        if (grid[dy][dx] !== word[i] || dx < 0 || dy < 0 || dx >= rowsLength || dy >= colsLength)
        {
            return false
        }
    }
    return true
}

const directions = [
    [-1,0],
    [-1,1],
    [-1,-1],
    [1,0],
    [1,1],
    [1,-1],
    [0,1],
    [0,-1]
]
