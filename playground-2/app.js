"use strict";
let myName = 'Erick';
let numberOfWheels = 2;
let isStudent = false;
let person1 = {
    name: 'Erick',
    age: 40,
    isStudent: false,
    address: {
        city: 'Embu',
        street: 'Kangaru'
    }
};
let person2 = {
    name: 'Jack',
    age: 20,
    isStudent: true,
};
function showDetails(person) {
    if (person.address) {
        console.log(`This is ${person.name}, He is ${person.age} and lives in ${person.address.street}, ${person.address.city}`);
    }
    else {
        console.log(`Error: User ${person.name} has no address`);
    }
}
// showDetails(person1)
// showDetails(person2)
// Typing arrays
let age = [10, 30];
let people = [person1, person2];
// generics
let people2 = [person1, person2];
let user1 = {
    id: 1,
    username: 'Jill',
    role: 'admin'
};
let user2 = {
    id: 2,
    username: 'Jack',
    role: 'admin'
};
let users = [user1, user2];
// TYPE NARROWING
function getUserDetails(identifier) {
    if (typeof identifier === "string") {
        let userFound = users.find(user => user.username == identifier);
        if (!userFound) {
            console.error('No user found');
            return;
        }
        console.log(userFound);
    }
    else {
        let userFound = users.find(user => user.id == identifier);
        if (!userFound) {
            console.error('No user found');
            return;
        }
        console.log(userFound);
    }
}
getUserDetails('Jack');
