class Engine {
    // enginetype:string;

    constructor(public enginetype:string) {
        // this.enginetype = 'v8';  
    }

}

class Browser extends Engine {
    constructor(){
        super('chakra');
    }
}  


var newBrowser = new Browser();
console.log(newBrowser);
