enum Role{
    admin = 101, 
    user,
    developer
}

let myRole : Role = 102;
console.log(myRole);
myRole = Role.developer;
console.log(myRole);

//Union types - only spceific values can be assigned to the variable
let availableFruteInBasket : 'apple' | 'mango' | 'banana' = 'apple';

console.log(availableFruteInBasket);
availableFruteInBasket = 'mango';
console.log(availableFruteInBasket);


//Type alias is used to avoid repetition of union types
type Colour = 'red' | 'green' | 'blue';
let myColour : Colour = 'red';
console.log(myColour);
myColour = 'green';
console.log(myColour);

// type with objects
type Person = {
    name: string,
    age: number,
    isMarried: boolean,
    role: Role
}

let person1 : Person = {
    name: 'John',
    age: 30,
    isMarried: false,
    role: Role.admin
}