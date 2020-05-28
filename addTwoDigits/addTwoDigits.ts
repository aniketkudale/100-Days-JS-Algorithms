function addTwoDigits(n: any): number {
    let digit = n.toString().split('')
    let total = parseInt(digit[0]) + parseInt(digit[1]);
    return total;
}

 console.log(addTwoDigits(29));