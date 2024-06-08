//class is a template of an object.It is just like a die or mold.
//we can multiple classes from it.
var Human = /** @class */ (function () {
    function Human(n, a, g, ad) {
        this.name = n;
        this.age = a;
        this.gender = g;
        this.address = ad;
    }
    return Human;
}());
//create an instance of a class.
var s1 = new Human("Huma Mohsin", 35, "Female", "House245");
var s2 = new Human("Sara", 32, "Female", "House123");
var s3 = new Human("Ali", 38, "Male", "House987");
console.log(s1);
console.log(s2);
console.log(s3);
