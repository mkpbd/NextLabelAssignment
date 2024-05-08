## Union Types 

Union type  hold multiple data types  in a variable or  parametter  union type denote by   | pipe character 

example 
```tsc 
    type status = "active"| "pending" | "cancel";
    type Animal = "Dog" | "Cat" | "Brid"

    type PhoneNumber = string | number;

    type  person = {
    name: string,
    age:number,
    Address:string
}
```


## Intersection types

An intersection type combines multiple type in to single types denoted by & single ampersing 

example 

```tsc
    
type  Peson = {
    name: string,
    age: number;
    phone:number
}

type PesonWithFullAddess = Peson & { gender: "Mail" | "Femail"| "others", addess: string}

```