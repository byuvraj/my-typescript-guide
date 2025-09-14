function toUpper(str: string): string {
    return str.toUpperCase();
}

console.log(toUpper('hello'));

function log (message: string | number) : never{//A function returning 'never' cannot have a reachable end point.
    console.log(message);
    throw new Error('Something went wrong');
}

function errorLog(message: string, log: (message:string)=> void): void {// passing function as parameter with return type as void
    log(message);
    throw new Error('Something went wrong');
}
errorLog('An error occurred', log);

// same can be used in dictionary or object

type User = {name: string, age: number, returnMessage: (msg: string) => string} // defining type for object where function is one of the properties

const user : User = {
    name: 'John',
    age: 30,
    returnMessage(msg: string) {
        return msg + ' ' + this.name;
    }
};