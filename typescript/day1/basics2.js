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
    function Engine(engineType) {
        this.engineType = engineType;
    }
    Engine.prototype.start = function () {
        console.log(' engine is going to start ');
        // return 10;
    };
    Engine.prototype.stop = function () {
        console.log('engine is stopped');
        // return 20;
    };
    return Engine;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super.call(this, 'petrol engine') || this;
    }
    Car.prototype.start = function () {
        console.log('start the engine ');
    };
    return Car;
}(Engine));
var audi = new Car();
audi.stop();
audi.start();
