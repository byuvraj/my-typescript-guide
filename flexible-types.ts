let score: any = 100; // Using 'any' type for flexibility only when necessary
let grade = "A";
let isPassed: boolean | string = true; // Union type when need to use multiple types

// ...

score = 150; // Valid reassignment as we have used any as a type
score = "A+"; 
score = true; 
isPassed = "Yes";
// Valid as isPassed can be boolean or string
//grade = true; 
// Error: Type 'boolean' is not assignable to type 'string'