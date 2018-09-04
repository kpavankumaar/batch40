var Producer = /** @class */ (function () {
    function Producer() {
        this.customers = [];
    }
    Producer.prototype.add = function (customer) {
        this.customers.push(customer);
    };
    Producer.prototype.remove = function (customer) {
        var index = this.customers.indexOf(customer);
        this.customers.splice(index, 1);
    };
    Producer.prototype.notify = function (message) {
        this.customers.forEach(function (item) {
            item.update(message);
        });
    };
    return Producer;
}());
var user1 = {
    name: 'ravi',
    device: 's5',
    update: function (message) {
        if (this.device === message) {
            console.log("user1 " + message);
        }
        else {
            console.log("not a s5 user update  " + message);
        }
    }
};
var product = new Producer();
product.add(user1);
product.notify('updates will be soon released ');
// iterator pattern 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var IteratorForArr = /** @class */ (function () {
    function IteratorForArr(arr, divisor) {
        if (divisor === void 0) { divisor = 1; }
        this.flag = 0;
        this.divisor = divisor;
        this.array1 = arr;
    }
    IteratorForArr.prototype.next = function () {
        while (this.flag < this.array1.length) {
            var val = this.array1[this.flag] % this.divisor === 0;
            this.flag++;
            if (val) {
                return this.array1[this.flag];
            }
        }
    };
    IteratorForArr.prototype.hasNext = function () {
        while (this.flag < this.array1.length) {
            this.flag = this.flag + 1;
            var val = this.array1[this.flag] % this.divisor === 0;
            return val;
        }
    };
    return IteratorForArr;
}());
var calc = new IteratorForArr(arr, 2);
console.log(calc.next() + " , do i have next value  " + calc.hasNext());
console.log(calc.next() + " , do i have next value  " + calc.hasNext());
console.log(calc.next() + " , do i have next value  " + calc.hasNext());
console.log(calc.next() + " , do i have next value  " + calc.hasNext());
