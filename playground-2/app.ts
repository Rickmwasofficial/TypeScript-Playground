let myName: string = 'Erick'
let numberOfWheels: number = 2
let isStudent: boolean = false

// console.log(`This is ${myName}, his car has ${numberOfWheels} wheels and he is ${isStudent ? 'a' : 'not a'} student`)


// Declaring custom object types

type Address = {
    street: string
    city: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}

let person1: Person = {
    name: 'Erick',
    age: 40,
    isStudent: false,
    address: {
        city: 'Embu',
        street: 'Kangaru'
    }
}

let person2: Person = {
    name: 'Jack',
    age: 20,
    isStudent: true,
    address: {
        city: 'Embu',
        street: 'Kangaru'
    }
}
