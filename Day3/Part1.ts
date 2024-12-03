export function NullIt(input: string): number {
    let mults= GetMults(input)
    let result = 0
    mults.forEach((m:any) => {
        var numbers =  GetNumbers(m[0])
        result+= parseInt(numbers[0])* parseInt(numbers[1])
    })
    return result
}

function GetNumbers(input: string):any {
    return input.match(/\d+/g);
  }

function GetMults(text: string):any{
    return Array.from(text.matchAll(/mul[(]\d+[,]\d+[)]/g))
}