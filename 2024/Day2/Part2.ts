export function RedNose(input: string): number {
    const lists = input.split("\n")
    let safeReportCount = 0

    lists.forEach(e=>{
       const levels = e.split(' ')
       var numbers = levels.map(Number);

        if (isSafe(numbers)){
            safeReportCount++
            console.log('safeReportCount', safeReportCount)
        }
        else{
            for (let i = 0; i < numbers.length; i++) {
                const numbersMinusOne = [...numbers.slice(0, i), ...numbers.slice(i + 1)];
                if (isSafe(numbersMinusOne)){
                    safeReportCount++
                    break
                }
            }
        }

    })

    return safeReportCount
}

function isSafe (arr:number[]) {
    return isDescending(arr) && isAdjacentOk(arr) || isAscending(arr) && isAdjacentOk(arr)
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