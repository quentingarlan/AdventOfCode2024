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
            if (CheckWord(x, y,  grid)) count++ 
        }
    }
    return count
}


function CheckWord (x:number, y:number, grid:string[][]) :boolean {
    let Xmas = false
    if (grid[x][y] != "A" ){
        return false
    }
    else if(grid[x-1] && grid[x+1]) {
        const diagonals = grid[x-1][y-1] + grid[x-1][y+1] + grid[x+1][y-1] + grid[x+1][y+1];

        if (diagonals == 'SSMM' || diagonals == 'MSMS' 
            || diagonals == 'MMSS' || diagonals =='SMSM'){
                Xmas = true
        }
    }
        
    return Xmas
}
