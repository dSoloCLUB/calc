console.log(3);
console.log("solnishko");
let name="solnishko"
console.log(name);
let food="pizza"
console.log(food);
name="nivea man"
console.log(name+" likes "+food);
let age=228
console.log(name+" is "+age+" years old ");
let pet="dog"
console.log(name+" has "+pet);
console.log(name+" loves wash with "+name);
let title=document.getElementsByTagName("h1")[0]
console.log(title);
let operators=["+","-","/","*","."]
let lastSymbol=""
title.innerHTML="nivea man calculator"
let input=document.getElementById("input")
console.log(input);
function addSymbol(symbol){
    console.log(symbol)
    if (operators.includes(symbol)) {
        if (!operators.includes(lastSymbol)) {
            input.value=input.value+symbol
        }
    }
    else{
        input.value=input.value+symbol
    }
    lastSymbol=symbol
}
function count(){
    console.log(eval(input.value));
    input.value=eval(input.value)
}