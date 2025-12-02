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
            let partial = dial - parseInt(numberToMove)
            if (partial < 0) {
                dial = 100 + partial
            } else {
                dial -= parseInt(numberToMove)
            }
        } else {
            let partial = dial + parseInt(numberToMove)

            if (partial > 100) {
                dial = parseInt(numberToMove) - (100 - dial)
            } else {
                dial += parseInt(numberToMove)
            }
        }
        if (dial == 0 || dial == 100) {
            result++
        }
    })
    return result
}
