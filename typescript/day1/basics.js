var _this = this;
var a = 20;
console.log(a);
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
};
for (var i = 0; i < 10; i = i + 1) {
    _loop_1(i);
}
// console.log(i);
var b = 15;
var sum1 = function (num1, num2, num3) {
    console.log(_this);
    return num1 + num2 + num3;
};
console.log(sum1(10, 20, 40));
