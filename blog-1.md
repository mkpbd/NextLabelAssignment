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

Person and  Employee .  A person  type has a name and age  other side  an Employee type has  a salary  and  department 

example

```tsc
  
type  Peson = {
    name: string,
    age: number;
    phone:number
}

type Employee = {
        salary : number;
        department: string;
}

type  PersonEmployee = Peson & Employee


```


The PersonEmployee type has all the propertices of both person and employee 

```tsc 
    let kamal: PersonEmployee = {
  name: "Kamal Passa",
  age: 25,
  salary: 5000,
  department: "IT",
};
```

### Intersection Another Example 

```tsc
    type Point = {
        x:number,
        y:number
    }

    type Point3D = Point & {
        z:number    
    }
```
