export function SecretEntrance(input: string): number {
    const list = input.split("\n")
    let dial = 50
    let result = 0
    list.forEach(l => {
        let numberToMove = l.substring(1)
        if (numberToMove.length > 2) {
            numberToMove = numberToMove.substring(1)
        }
        if (l[0] == 'L') {
            console.log("numberToMove -", numberToMove)
            let partial = dial - parseInt(numberToMove)
            if (partial < 0) {
                dial = 100 + partial
            } else {
                dial -= parseInt(numberToMove)
            }
            console.log("dial -", dial)
        } else {
            console.log("numberToMove -", numberToMove)
            let partial = dial + parseInt(numberToMove)

            if (partial > 100) {
                console.log("partial -", partial)
                dial = parseInt(numberToMove) - (100 - dial)
            } else {
                dial += parseInt(numberToMove)
            }
            console.log("dial +", dial)
        }
        if (dial == 0 || dial == 100) {
            console.log("Found at dial ", dial)
            result++
        }
    })
    return result
}
