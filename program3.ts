//class is a template of an object.It is just like a die.
//we can multiple classes from it.


class Human{
    name:string;
    age:number;
    gender:string;
    address:string;

    constructor(n:string,a:number,g:string,ad:string){
this.name=n;
this.age=a;
this.gender=g;
this.address=ad;
    }
}

//create an instance of a class.
let s1=new Human("Huma Mohsin",35,"Female","House245");
let s2= new Human("Sara",32,"Female","House123");
let s3=new Human("Ali",38,"Male","House987");
console.log(s1);
console.log(s2);
console.log(s3);
