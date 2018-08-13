var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engine = /** @class */ (function () {
    // enginetype:string;
    function Engine(enginetype) {
        this.enginetype = enginetype;
        // this.enginetype = 'v8';  
    }
    return Engine;
}());
var Browser = /** @class */ (function (_super) {
    __extends(Browser, _super);
    function Browser() {
        return _super.call(this, 'chakra') || this;
    }
    return Browser;
}(Engine));
var newBrowser = new Browser();
console.log(newBrowser);
