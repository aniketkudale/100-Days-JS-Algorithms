function almostIncreasingSequence(sequence: number[]): boolean {
    let strike = 0;
    for(let i = 0; i < sequence.length; i++) {
        if(sequence[i] > sequence[i+1]) {
            strike++;
        }
    }
    if(strike > 1) {
        return false;
    } else {
        return true;
    }    
}

//console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 