export function GiftShop(input: string): number {
    const list = input.split(",")
    let result = 0
    list.forEach(l => {
        const ids = l.split("-")
        const firstId = parseInt(ids[0])
        const secondId = parseInt(ids[1])
        for (let i = firstId; i <= secondId; i++) {
            let strId = i.toString()
            let isWrong = isWrongId(strId)
            if (isWrong) {
                result += i
            }
        }
    })
    return result
}

function isWrongId(s: string): boolean {
    let doubled: string = s + s;
    return doubled.indexOf(s, 1) != s.length && s == s;
}
