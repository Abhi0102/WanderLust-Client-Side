var tryt = /** @class */ (function () {
    function tryt() {
        this.a = 20;
    }
    tryt.prototype.hey = function (x) {
        this.a = x;
        console.log(this.a);
    };
    return tryt;
}());
new tryt().hey(30);
