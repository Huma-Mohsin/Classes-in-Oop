//Inheritance 
class Student{
    name:string;
    age:number;
    constructor(n:string,r:number){
        this.name=n;
        this.age=r;
    }
}

class Teacher extends Student{
    id:number;
    constructor(name:string,age:number,i:number){
        super(name,age);
        this.id=i;

    }
}
let std1=new Student("Sana",28 );
console.log(std1);
let t1=new Teacher("Mr Zameer" ,42,4563 );
console.log(t1);

