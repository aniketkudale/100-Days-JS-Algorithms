function adjacentElementsProduct(arr: number[]): number {
    let prod = arr[0] * arr[1];
    let res = 0, output = 0;
    for(let i=1; i<arr.length-1; i++) {
        res = arr[i] * arr[i+1]
        output = (prod > res ) ? prod : res;
    }
    return output;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));