

const logString  = (str: unknown) : string  =>  {

    if(typeof str === "string"){
        return str;
    }

        return "Input is not a string.";
    
} 


console.log(logString("Hello, TypeScript!"))
 console.log(logString(42))