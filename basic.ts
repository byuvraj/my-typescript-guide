var userName : string; //Explicite assignment of the variable type

var salary = 50; // since here we have value do not need to explicite assignment of the variable type

//*** 

userName = "UserY";

function disp(str: string, loc = "FromDisp functiion ") : void{
    console.log(loc + str);
    // return loc+str; since return type is void it will give error if we return anything
}

disp (userName);