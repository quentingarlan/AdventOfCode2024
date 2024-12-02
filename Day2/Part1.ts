export function RedNose(input: string): number {
    const lists = input.split("\n")
    let safeReportCount = 0

    lists.forEach(e=>{
       const levels = e.split(' ')
       var numbers = levels.map(Number);

        if (isDescending(numbers) && isAdjacentOk(numbers) || isAscending(numbers) && isAdjacentOk(numbers)){
            safeReportCount++
        }

    })

    return safeReportCount
}

function isAscending(arr:number[]) {
    return arr.every(function (x:number, i:number) {
        return i === 0 || x >= arr[i - 1];
    });
}

function isDescending(arr:number[]) {
    return arr.every(function (x:number, i:number) {
        return i === 0 || x <= arr[i - 1];
    });
}

function isAdjacentOk(arr:number[]) {
    return arr.every(function (x:number, i:number) {
        return i === 0 || Math.abs(x - arr[i - 1]) >= 1 &&  Math.abs(x - arr[i - 1]) <=3;
    });
}