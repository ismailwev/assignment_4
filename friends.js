function perfectFriend(string) {
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (string[i].length == 5) {
            return string[i];
        }

    }
}
const friends = ['ismail', 'anjumanara', 'proma', 'tanbin', ];
const largeString = perfectFriend(friends);
console.log(largeString);