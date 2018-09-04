class Producer {
    customers;
    constructor() {
        this.customers = [];
    }

    protected add(customer){
        this.customers.push(customer);
    } 
    remove(customer){
        let index = this.customers.indexOf(customer);
        this.customers.splice(index,1);
    }
    notify(message){
        this.customers.forEach(item => {
            item.update(message);
        });
    }
}
class Producer1  extends Producer {
    constructor() {
        super();
    }
    add(item){

    }

}






let user1 = {
    name: 'ravi',
    device:'s5',
    update: function(message){
        if(this.device === message){
            console.log(`user1 ${message}`)    
        }else{
            console.log(`not a s5 user update  ${message}`);
        }

    }
}

let product = new Producer1();
product.add(user1);
product.notify('updates will be soon released ');

// iterator pattern 
var arr = [1,2,3,4,5,6,7,8,9]
class IteratorForArr {
    flag = 0;
    divisor;
    array1;
    constructor(arr,divisor = 1) {
        this.divisor = divisor;
        this.array1 = arr;
    }
    next(){
        while(this.flag < this.array1.length) {
            let val = this.array1[this.flag] % this.divisor === 0;
            this.flag++;
            if (val) {
                return this.array1[this.flag];
            }
        }
    }
    hasNext(){
        while(this.flag< this.array1.length){
            this.flag = this.flag + 1;
            let val = this.array1[this.flag] % this.divisor === 0;
            return val;
            
        }
    }
}
let calc = new IteratorForArr(arr,2);
console.log(`${calc.next()} , do i have next value  ${calc.hasNext()}` , );
console.log(`${calc.next()} , do i have next value  ${calc.hasNext()}`, );
console.log(`${calc.next()} , do i have next value  ${calc.hasNext()}`, );
console.log(`${calc.next()} , do i have next value  ${calc.hasNext()}`, );

function test<T>(arg:T):T{
    return arg;
}

test(10);
test(['ravi']);