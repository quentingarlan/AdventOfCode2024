export function PrintQueue(input: string): number {
    const parsedInput = input.split("\n\n")
    const pageOrderings = parsedInput[0]
    const updates = parsedInput[1]
    
    const pageOrderingArray = pageOrderings.split("\n").map(m => m.split("|"))
    const updatesArray =updates.split("\n").map(m => m.split(","))
        let result = 0
    console.log('pageOrderingArray',pageOrderingArray)
    console.log('updatesArray',updatesArray)
    let wrongArrays:string[][] = []
    for (let i = 0; i < updatesArray.length; i++)
    {
        let wrongUpdates = CheckUpdate(updatesArray[i], pageOrderingArray) 
        console.log('update wrong ', wrongUpdates)
        console.log('updatesArray[i] ', updatesArray[i])
        var updatedArray = []
        if (wrongUpdates.length > 0){
            wrongUpdates.forEach(w =>{
                updatedArray = fixUdate(updatesArray[i], w)
            })
        }     
        wrongArrays.push(updatesArray[i])   
    }
    wrongArrays.forEach(a =>{
        result +=CenterOfArray(a)
    })
    

    return result
}

function fixUdate(array:any, wrongUpdate:any) {
   
    console.log('incorrect update ', wrongUpdate)
    array[wrongUpdate.index] = wrongUpdate.oldValue
    array[wrongUpdate.oldIndex] = wrongUpdate.update
    console.log('update wrong updated', array)
    return array
}

function CheckUpdate(update: string[], pageOrderingArray: string[][]):any[]{
    let incorrectStep:any[] = []

    let mandatoryNextSteps = ArrayContainsAsFirstElement(pageOrderingArray, update[0])
        if (mandatoryNextSteps.length > 0){    
            console.log('mandatoryNextSteps 0',mandatoryNextSteps)
            for (let j = 1 ; j < update.length; j++) {
                if (!mandatoryNextSteps.includes(update[j])){
                     incorrectStep.push({update: update[j], index: j, oldIndex:0, oldValue:update[0]})
                    // break;
                }
            }
        }
    
    for (let i = 1; i < update.length; i++)
    {
        let mandatoryPreviousSteps = ArrayContainsAsSecondElement(pageOrderingArray, update[i])
        if (mandatoryPreviousSteps.length > 0){
           
            for (let j = 0 ; j < i; j++) {
                console.log('mandatoryPreviousSteps',mandatoryPreviousSteps)
                if (!mandatoryPreviousSteps.includes(update[j])){
                    console.log('update[j]',update[j])
                    if (update[j] != update[i])
                     incorrectStep.push({update: update[j], index: j, oldIndex:i, oldValue:update[i]})
                    // break;
                }
            }
        }
    }
    return incorrectStep
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