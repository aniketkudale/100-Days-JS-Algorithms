function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let max = 0, diff = 0;
    for (let i = 0; i < inputArray.length; i++) {
        diff = Math.abs(inputArray[i] - inputArray[i+1]);
        if ( diff > max) {
            max = diff;
        }
    }
    return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));