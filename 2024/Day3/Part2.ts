export function NullIt(input: string): number {
    let instrs= GetInstructions(input)
    let result = 0
    let disabled = false
    instrs.forEach((m:any) => {
        if (m[0] == "don't()"){
            disabled = true
        }
        else {
            if (m[0] == "do()"){
                disabled = false
            } 
            else if (disabled == false){
                var numbers =  GetNumbers(m[0])
                result+= parseInt(numbers[0])* parseInt(numbers[1])
            }
        }
    })
    return result
}

function GetNumbers(input: string):any {
    return input.match(/\d+/g);
  }

function GetInstructions(text: string):any{
    return Array.from(text.matchAll(/mul[(]\d+[,]\d+[)]|do\(\)|don\'t\(\)/g))
}

