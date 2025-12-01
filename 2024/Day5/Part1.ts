export function PrintQueue(input: string): number {
    const parsedInput = input.split("\n\n")
    const pageOrderings = parsedInput[0]
    const updates = parsedInput[1]
    
    const pageOrderingArray = pageOrderings.split("\n").map(m => m.split("|"))
    const updatesArray =updates.split("\n").map(m => m.split(","))
        let result = 0
    console.log('pageOrderingArray',pageOrderingArray)
    console.log('updatesArray',updatesArray)
    for (let i = 0; i < updatesArray.length; i++) {
        let updateOk = true;
    
        updateOk = CheckUpdate(updatesArray[i], pageOrderingArray) 
        if (updateOk){
            console.log('correct update ', updatesArray[i], 'updateOk', updateOk)
            result +=CenterOfArray(updatesArray[i])
        }        
    }

    return result
}

function CheckUpdate(update: string[], pageOrderingArray: string[][]):boolean{
    let correctUpdate = true

    let mandatoryNextSteps = ArrayContainsAsFirstElement(pageOrderingArray, update[0])
        if (mandatoryNextSteps.length > 0){    
            for (let j = 1 ; j < update.length; j++) {
                console.log('mandatoryNextSteps', mandatoryNextSteps)
                if (!mandatoryNextSteps.includes(update[j])){
                     console.log('incorrectUpdate', update[j])
                    correctUpdate = false
                    break;
                }
            }
        }
    
    for (let i = 1; i < update.length; i++)
    {
        let mandatoryPreviousSteps = ArrayContainsAsSecondElement(pageOrderingArray, update[i])
        if (mandatoryPreviousSteps.length > 0){
           
            for (let j = 0 ; j < i; j++) {
                if (!mandatoryPreviousSteps.includes(update[j])){
                     console.log('incorrectUpdate', update[j])
                    correctUpdate = false
                    break;
                }
            }
        }
    }
    return correctUpdate
}

function CenterOfArray(array:string[]):number {
    var middle = array[Math.round((array.length - 1) / 2)];
    return Number(middle)
}

function ArrayContainsAsSecondElement(array:string[][], element: any):string[] {
    let result:string[] = []
     array.forEach(e => {
        if (e[1] === element){
            result.push(e[0])
        }
     });
     return result
}

function ArrayContainsAsFirstElement(array:string[][], element: any):string[] {
    let result:string[] = []
     array.forEach(e => {
        if (e[0] == element){
            result.push(e[1])
        }
     });
     return result
}