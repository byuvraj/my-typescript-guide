let a :null |string; // union type with null to help us to assign null to string type variable when needed to clear value

a = 'hello';
console.log(a);
a = null;

//const element = document.getElementById('myElement')!; // using non-null assertion operator to tell compiler that element will not be null
const element = document.getElementById('myElement') as HTMLInputElement ; // using type assertion to tell compiler that element will be of type HTMLInputElement 
console.log(element.innerHTML); 
console.log(element?.value); // using optional chaining operator to safely access property that might be null or undefined
