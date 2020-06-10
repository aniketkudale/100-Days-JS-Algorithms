function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let you = 0;
    let yourFriend = 0;

    you = yourLeft + yourRight;
    yourFriend = friendsLeft + friendsRight;

    if ( you !== yourFriend) {
        return false;
    }
    return true;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
