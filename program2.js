//class is a factory that produces an object.
var Product = /** @class */ (function () {
    //we makconstructor inside a class.
    function Product(n, p) {
        //constructor is a checker that ensures all the fields are correctly filled or not,keeps check and balnce of each parameter and arguments.
        this.name = n;
        this.price = p;
    }
    //function inside class is termed as Methods.
    //we can make functions like this name of function(){//body of function}
    Product.prototype.display = function () {
        console.log("The price of ".concat(this.name, " is ").concat(this.price));
    };
    return Product;
}());
//create an instance i.e object of this above class.
var laptop = new Product("HP", 125000);
//if you want to change a name then
console.log("Before Rename ");
console.log("****************");
//call a method.
laptop.display();
console.log(laptop.name);
console.log(laptop.price);
console.log("\n");
console.log("After Rename");
console.log("*************");
laptop.name = "DELL";
//again call a methods .
//call a method.
laptop.display();
console.log(laptop.name);
console.log(laptop.price);
//Author-Huma Mohsin
