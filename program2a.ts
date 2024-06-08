//Inheritance in JavaScript, specifically in TypeScript, allows you to create a new class that is based on an existing class. This new class, called a subclass or derived class, inherits the properties and methods of the existing class, called the superclass or base class.

class Product{
    name:string;
    price:number;

//we makconstructor inside a class.
constructor(n:string,p:number){
    //constructor is a checker that ensures all the fields are correctly filled or not,keeps check and balnce of each parameter and arguments.
this.name=n;
this.price=p;
}
//function inside class is termed as Methods.
//we can make functions like this name of function(){//body of function}
display(){
    console.log(`The price of ${this.name} is ${this.price}`)
}

}



class Electronics extends Product{//Product is a base class while Electronics is a child class.
warranty:number;

constructor(name:string,price:number,w:number){//parent ki properties b batani hogi humay constructor mai.
super(name,price);
this.warranty=w;
}

showWarranty(){
    super.display()
    console.log(`The Warranty of ${this.name} is ${this.warranty} years.`)
}
}
//accesss an object.
const led=new Electronics("TCL",55000,2);
led.showWarranty();

//Author-Huma MOhsin

