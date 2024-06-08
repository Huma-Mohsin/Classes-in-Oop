//Classes are the blueprint of an object in js. we used classes to oraganize our code, make it easier to read.
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//we are trying to make an object of this class.
var per = new Person();
per.name = "zain";
per.age = 34;
console.log(per);
//author-Huma Mohsin
