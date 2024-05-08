class Car {

    constructor(public brand:string, public model:string, public year:number ){

     
         console.log( `Your car model is:  ${this.year}  ${ this.brand} ${this.model}`);
    }

    // getCar() : string{
    //     return  `Your car model is:  ${this.year}  ${ this.brand} ${this.model}`
    // }
}


new Car("Toyota", "Corolla", 2020);