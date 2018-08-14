interface EngineDef{
    start:()=>any;
    stop:()=>void;
}
class Engine implements EngineDef {
    constructor(public engineType) {
        
    }
    start(){
        console.log(' engine is going to start ');
        // return 10;
    }
    stop(){
        console.log('engine is stopped');
        // return 20;
    }
}
class Car extends Engine {
    constructor() {
        super('petrol engine');
    }
    start(){
        console.log('start the engine ');
        
    }
}   
var audi = new Car();
audi.stop();
audi.start();