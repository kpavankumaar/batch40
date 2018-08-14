// objects 
interface Obj {
    readonly a: number;
    b: string;
}

let obj1:Obj;
obj1 = {
    a: 10,
    b: '20'
}

obj1.a = 50 ;
// arrays 
interface StringArray {
    readonly [index:number]: string;
}

let friends:StringArray = ['ravi','srikanth'];

let newFrnds = friends.slice(1,2);
console.log(newFrnds);

// function type 
interface Def {
    (num1: number , num2: number ):boolean;
}
let sum: Def;
sum = function (num1 ,num2){
    console.log(num1 + num2 );
    return true;
}

sum(19,'20');
let sub:Def;
sub = function (a,b){
    console.log(a-b)
    return true;
}

sub(1,'2');
// class type 
interface EngineDef1{
    start:() => any;
    stop?:()=> any;
} 
interface EngConstructor {
    new (e:string);
}
class Engine1 implements EngineDef1 {
    constructor(public engineType) {
        
    }
    start (){
        console.log('this is a start');
    }
}
function createConstructorInterface (construct:EngConstructor){
    let superFastEngine = new construct(10);
    console.log(superFastEngine);
}
createConstructorInterface(Engine1);