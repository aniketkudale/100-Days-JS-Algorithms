function arrayChange(inputArray: number[]): number {
    let index = 1, sum = 0;
    for(let i=0; i<inputArray.length; i++) {
        if (inputArray[i] != i+1) {
             sum += index - inputArray[i]; 
        }
        index++;
    }
    return sum;
}

console.log(arrayChange([1, 1, 1, 1]));