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

// showDetails(person1)
// showDetails(person2)

// Typing arrays
let age: number[] = [10, 30]

let people: Person[] = [person1, person2]

// generics
let people2: Array<Person> = [person1, person2]

// console.log(people2)

// UNIONS

type User = {
    id: number
    username: string
    role: 'guest' | 'admin' | 'member' // unions
}

let user1: User = {
    id: 1,
    username: 'Jill',
    role: 'admin'
}

let user2: User = {
    id: 2,
    username: 'Jack',
    role: 'admin'
}

let users: User[] = [user1, user2]

// TYPE NARROWING

function getUserDetails(identifier: string | number): void {  // function return type
    if (typeof identifier === "string") {
        let userFound = users.find(user => user.username == identifier)
        if (!userFound) {
            console.error('No user found')
            return
        }
        console.log(userFound)
    } else {
        let userFound = users.find(user => user.id == identifier)
        if (!userFound) {
            console.error('No user found')
            return
        }
        console.log(userFound)
    }
}

getUserDetails('Jack')