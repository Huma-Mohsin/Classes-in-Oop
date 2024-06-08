//Inheritance in JavaScript, specifically in TypeScript, allows you to create a new class that is based on an existing class. This new class, called a subclass or derived class, inherits the properties and methods of the existing class, called the superclass or base class.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Electronics = /** @class */ (function (_super) {
    __extends(Electronics, _super);
    function Electronics(name, price, w) {
        var _this = _super.call(this, name, price) || this;
        _this.warranty = w;
        return _this;
    }
    Electronics.prototype.showWarranty = function () {
        _super.prototype.display.call(this);
        console.log("The Warranty of ".concat(this.name, " is ").concat(this.warranty, " years."));
    };
    return Electronics;
}(Product));
//accesss an object.
var led = new Electronics("TCL", 55000, 2);
led.showWarranty();
//Author-Huma MOhsin
