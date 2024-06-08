//Implements
//implements" is a keyword used to indicate that a class implements one or more interfaces.
//An interface in OOP defines a contract, specifying a set of methods that a class implementing the interface must provide. When a class implements an interface, it promises to provide implementations for all the methods declared in that interface.
var Students = /** @class */ (function () {
    function Students(name, course, center, id) {
        this.name = name;
        this.course = course;
        this.center = center;
        this.id = id;
    }
    return Students;
}());
var Teachers = /** @class */ (function () {
    function Teachers(name, course, center, id, exp) {
        this.name = name;
        this.course = course;
        this.center = center;
        this.id = id;
        this.yearsOfExperience = exp;
    }
    return Teachers;
}());
var student = new Students("Huma Mohsin", "GenAI", "Governor House", 12345);
console.log(student);
var teacher = new Teachers("Miss Atia", "GenAI", "Governor House", 23468, 5);
console.log(teacher);
//Author-Huma Mohsin
