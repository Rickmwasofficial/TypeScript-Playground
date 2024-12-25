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
    address?: Address // Optional 
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
}


function showDetails(person: Person) {
    if (person.address) {
        console.log(`This is ${person.name}, He is ${person.age} and lives in ${person.address.street}, ${person.address.city}`)
    } else {
        console.log(`Error: User ${person.name} has no address`)
    }
}

showDetails(person1)
showDetails(person2)