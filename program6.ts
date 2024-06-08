////Template For Correction Of Name.

class Humman{
    name:string;
    constructor(n:string){
        this.name=n;
    }
    rename (rn:string){
        this.name=rn;
    }
}
let std=new Humman("Huma Aftab");
console.log(std)
std.rename("Huma Mohsin");
console.log(std);

//Author-HUMA MOHSIN
