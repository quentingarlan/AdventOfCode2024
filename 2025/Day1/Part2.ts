export function HistorianHysteria(input: string): number {
    const lists = input.split("\n")
    let list1: number[] = []
    let list2: number[]= []
    lists.forEach(l=>{
       const lsplited = l.split('   ')
       list1.push(Number(lsplited[0]))
       list2.push(Number(lsplited[1]))
    })

    let distances = 0

    for (let i = 0; i < list1.length; i++) {
        let countInList2 = 0
        for (let j=0; j< list2.length; j++){
            if (list1[i] == list2[j]){
                countInList2++;
            }
        }
        distances += list1[i] * countInList2
    }
    return distances
}
