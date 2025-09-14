function throwError(msg? : string) { // setting up optional parameter
    throw new Error(msg || "An error occurred");
}
// since the parameter is optional, we can call the function with or without it as shown below
throwError("This is an error message");
throwError();


type Player = {
    name: string;
    age?: number; // optional property
    position?: string; // another optional property
}
//nullish coalescing operator (??) example
let input = null; 
const isAdult = input ?? false; // if input is null or undefined, isAdult will be false
