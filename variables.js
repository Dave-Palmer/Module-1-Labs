let variable1 = 1
const variable2 = 2

const func = () => {
    const variable2 = 5;
    console.log(variable2)
}

func()
console.log(variable2)

let gamingConsoles = ['playstation', 'xbox', 'switch', 'gameboy']
//the item at index 2 is stored in nintendo
let nintendo = gamingConsoles[2]

console.log(nintendo)
//dreamcast is added to the end of the array, it also returns the new length of the array
gamingConsoles.push('dreamcast')

console.log(gamingConsoles)
//the item at index 0 is removed, returned and stored in the variable sony
let sony = gamingConsoles.shift()

console.log(gamingConsoles)

console.log(gamingConsoles.indexOf('xbox'))

let microsoft = gamingConsoles[gamingConsoles.indexOf('xbox')]

console.log(microsoft)

function sum(num1, num2) {
    return num1 + num2
}

if (sum(5,5) !=11) {
    throw Error('function error with sum')}