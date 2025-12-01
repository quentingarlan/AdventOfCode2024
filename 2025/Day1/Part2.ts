export function SecretEntrance(input: string): number {
    const list = input.split("\n")
    let dial = 50
    let result = 0
    list.forEach(l => {
        let numberToMove = l.substring(1)
        if (l[0] == 'L') {
            for (let i = 0; i < parseInt(numberToMove); i++) {
                if (dial == 100) {
                    result++
                }
                if (dial == 0) {
                    result++
                    dial = 100
                }
                dial--
            }
        } else {
            for (let i = 0; i < parseInt(numberToMove); i++) {
                if (dial == 0) {
                    result++
                }
                if (dial == 100) {
                    result++
                    dial = 0
                }
                dial++
            }
        }
    })
    return result
}
