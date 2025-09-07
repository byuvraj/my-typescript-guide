let numbers=[1, 2, 3, 4, 5];

//numbers.push('6');
//Error as structure of the array contains number and we are pushing string.

//let mixedArray: (number | string)[] = [1, 'two', 3, 'four'];
let mixedArray: Array<number | string> ;
// Valid as mixedArray can contain both numbers and strings
mixedArray = [1.2,"two"]
mixedArray.push(5);
mixedArray.push('six');

let passCode : [number, boolean]; 
// Tuple type with fixed structure: first element is number, second is boolean
passCode = [1234, true];
// passCode = [1234, 21]; This is invalid as second element should be boolean
//passCode = [5678, false, 100];
// passCode = [5678, false, 22, true]; 
// Error: Tuple type '[number, boolean]' of length '2' has no element at index '2'.
// Error: Tuple type '[number, boolean]' of length '2' has no element at index '3'.



// *** Objects ***
let employee: { 
    id: number; 
    name: string; 
    isActive: boolean 
    } = { 
        id: 1, 
        name: "John Doe", 
        isActive: true 
    };