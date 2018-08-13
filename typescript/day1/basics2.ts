interface EngineDef{
    start:()=>any;
    stop:()=>void;
}
class Engine implements EngineDef {
    constructor(public engineType) {
        
    }
    public start(){
        console.log(' engine is going to start ');
        return 10;
    }
    public stop(){
        return 20;
    }
}
class Car extends Engine {
    constructor() {
        super('petrol engine');
    }
    start(){
        
    }
}   
var audi = new Car();
console.log(audi)