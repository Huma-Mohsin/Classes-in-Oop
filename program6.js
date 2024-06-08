////Template For Correction Of Name.
var Humman = /** @class */ (function () {
    function Humman(n) {
        this.name = n;
    }
    Humman.prototype.rename = function (rn) {
        this.name = rn;
    };
    return Humman;
}());
var std = new Humman("Huma Aftab");
console.log(std);
std.rename("Huma Mohsin");
console.log(std);
//Author-HUMA MOHSIN
