//Implements

//implements" is a keyword used to indicate that a class implements one or more interfaces.

//An interface in OOP defines a contract, specifying a set of methods that a class implementing the interface must provide. When a class implements an interface, it promises to provide implementations for all the methods declared in that interface.


class Students {
    name:string;
    course:string;
    center:string;
    id:number;

    constructor(name:string,course:string,center:string,id:number){
       
        this.name=name;
        this.course=course;
        this.center=center;
        this.id=id;aaaaaaaaaaaaa
       
}
}
class Teachers implements Students{
    name:string;
    course:string;
    center:string;
    id:number;
   yearsOfExperience: number;
    constructor(name:string,course:string,center:string,id:number,exp:number){
       
        this.name=name;
        this.course=course;
        this.center=center;
        this.id=id;
        this.yearsOfExperience=exp;

    }
}

let student=new Students("Huma Mohsin","GenAI","Governor House",12345);
console.log(student);
let teacher=new Teachers("Miss Atia","GenAI","Governor House",23468,5);
console.log(teacher);

//Author-Huma Mohsin