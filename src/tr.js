"use strict";
exports.__esModule = true;
exports.tr = void 0;
var tr = /** @class */ (function () {
    function tr() {
        this.a = [{ destinationId: 1, destinationName: "Europe" },
            { destinationId: 2, destinationName: "Europe" },
            { destinationId: 3, destinationName: "Europe" },
            { destinationId: 4, destinationName: "Australia" },
            { destinationId: 5, destinationName: "Australia" },
            { destinationId: 6, destinationName: "Australia" },
            { destinationId: 7, destinationName: "Australia" },
            { destinationId: 8, destinationName: "Asia" },
            { destinationId: 9, destinationName: "Asia" },
            { destinationId: 10, destinationName: "Asia" },
            { destinationId: 11, destinationName: "Asia" },
            { destinationId: 12, destinationName: "Europe" },
            { destinationId: 13, destinationName: "Europe" },
            { destinationId: 14, destinationName: "America" },
            { destinationId: 15, destinationName: "America" },
            { destinationId: 16, destinationName: "America" }];
        this.check();
        console.log(this.a);
    }
    tr.prototype.check = function () {
        console.log(this.a);
    };
    return tr;
}());
exports.tr = tr;
