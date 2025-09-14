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
    role :{ id: number; name: string }
    } = { 
        id: 1, 
        name: "John Doe", 
        isActive: true ,
        role : { id :202501, name : "TS Developer"}
    };

let notNullValue :{} = {};
notNullValue = { key: "value" }; // Valid, as {} can hold any non-null object
//notNullValue = null; // Error, as null is not assignable to {}

let specifyAsObject : Record<string, string | boolean>;
specifyAsObject = { key1: "value1", "key2": true }; // Valid key can be used without inverted commas
//specifyAsObject = { key1: "value1", key2: 100 }; // Error, as value must be string or boolean 