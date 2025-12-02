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
            if (isWrong && repeats(strId)) {
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
function repeats(str: string): boolean {

    if (str.length % 2 !== 0) {
        return false;
    }
    let first = str.substring(0, str.length / 2);
    let second = str.substring(str.length / 2);

    return first === second;
};