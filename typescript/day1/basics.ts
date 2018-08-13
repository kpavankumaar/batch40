
let a = 20;
console.log(a);
for(let i = 0 ; i< 10 ; i = i + 1){
    setTimeout(function(){
        console.log(i);
    },1000);
}
// console.log(i);
const b = 15;
var sum1 = (num1,num2,num3) => {
    console.log(this);
    return num1+num2+num3
};

console.log(sum1(10,20,40));
