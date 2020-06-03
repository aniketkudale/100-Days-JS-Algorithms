function allLongestStrings(inputArray: string[]): string[] {
    let result = [];
    let great = inputArray[0].length;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length >= great) {
            result.push(inputArray[i])
        }
    }
    return result;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));