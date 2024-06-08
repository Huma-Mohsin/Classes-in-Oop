//class is a factory that produces an object.

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
//create an instance i.e object of this above class.
const laptop = new Product("HP",125000);
//if you want to change a name then

console.log("Before Rename ")
console.log("****************")
//call a method.
laptop.display();
console.log(laptop.name);
console.log(laptop.price);
console.log("\n")
console.log("After Rename")
console.log("*************")
laptop.name="DELL";
//again call a methods .
//call a method.
laptop.display();
console.log(laptop.name);
console.log(laptop.price);

//Author-Huma Mohsin