let myName: string = 'Erick'
let numberOfWheels: number = 2
let isStudent: boolean = false

// console.log(`This is ${myName}, his car has ${numberOfWheels} wheels and he is ${isStudent ? 'a' : 'not a'} student`)


// Declaring custom object types

type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: 'Erick',
    age: 40,
    isStudent: false
}

let person2: Person = {
    name: 'Jack',
    age: 20,
    isStudent: true
}
