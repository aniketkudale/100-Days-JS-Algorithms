function arrayConversion(inputArray: number[]): number {
    let a = inputArray, maxCount = 3, result: number[] = [];
    for(let i=0; i<maxCount; i++) {
        for(let j=0; j<a.length; j+=2) {
            if ( i == 0 || i == 2) {
                result.push( a[j] + a[j+1])
            }
            if ( i == 1) {
                result.push( a[j] * a[j+1])
            }
        }
        a = result;
        result = [];
         
    }
    return a[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
