var obj1;
obj1 = {
    a: 10,
    b: '20'
};
obj1.a = 50;
var friends = ['ravi', 'srikanth'];
var newFrnds = friends.slice(1, 2);
console.log(newFrnds);
var sum;
sum = function (num1, num2) {
    console.log(num1 + num2);
    return true;
};
sum(19, '20');
var sub;
sub = function (a, b) {
    console.log(a - b);
    return true;
};
sub(1, '2');
var Engine1 = /** @class */ (function () {
    function Engine1(engineType) {
        this.engineType = engineType;
    }
    Engine1.prototype.start = function () {
        console.log('this is a start');
    };
    return Engine1;
}());
function createConstructorInterface(construct) {
    var superFastEngine = new construct('Airplane Engine');
    console.log(superFastEngine);
}
createConstructorInterface(Engine1);
