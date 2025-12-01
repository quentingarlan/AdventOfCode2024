export function HistorianHysteria(input: string): number {
    const lists = input.split("\n")
    let list1: number[] = []
    let list2: number[]= []
    lists.forEach(l=>{
       const lsplited = l.split('   ')
       list1.push(Number(lsplited[0]))
       list2.push(Number(lsplited[1]))
    })
    list1.sort((a, b) => a - b);
    list2.sort((a, b) => a - b);

    let distances = 0
    for (let i = 0; i < list1.length; i++) {
        distances +=  Math.abs(list1[i] - list2[i])
    }
    return distances
}
