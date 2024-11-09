const display = document.querySelector('.display')
let toDisplay = 0
let activeDisplayString = " "
const allNumButtons = document.querySelectorAll('.num')
const clearButton = document.querySelector('.clear')
const aButton = document.querySelector('#plus')
const sButton = document.querySelector('#minus')
const mButton = document.querySelector('#multiply')
const dButton = document.querySelector('#divide')
const equalsButton = document.querySelector(".enter")
const dotButton = document.querySelector(".period")
let activeOperation = ""
let firstOperator = 0
let secondOperator = 0
let ret = 0

function setDisplay(){
    display.innerText=new String(toDisplay)
}

setDisplay()


function numberClick(e){
    const num = e.currentTarget.textContent;
    console.log(num);
    activeDisplayString=activeDisplayString+num;
    toDisplay=parseFloat(activeDisplayString)
    setDisplay()
}

allNumButtons.forEach(function(btn){
    btn.addEventListener("click",numberClick);
})

function clear(){
    activeDisplayString = "";
    toDisplay=0;
    setDisplay();
}

clearButton.addEventListener("click",clear);
aButton.addEventListener("click",startAdd);
sButton.addEventListener("click",startSubtract);
mButton.addEventListener("click",startMultiply);
dButton.addEventListener("click",startDivide);
equalsButton.addEventListener("click",equals);


function startAdd(){
    firstOperator=toDisplay;
    activeOperation="a";
    clear();
}

function startSubtract(){
    firstOperator=toDisplay;
    activeOperation="s";
    clear();
}

function startMultiply(){
    firstOperator=toDisplay;
    activeOperation="m";
    clear();
}

function startDivide(){
    firstOperator=toDisplay;
    activeOperation="d";
    clear();
}

function equals(){
    if(activeOperation=="a"){
        ret = firstOperator+toDisplay
    } else if (activeOperation=="s") {
        ret = firstOperator-toDisplay;
    } else if (activeOperation=="m") {
        ret = firstOperator*toDisplay;
    } else if(activeOperation=="d") {
        ret = firstOperator/toDisplay;
    }
    toDisplay=ret;
    activeDisplayString = String(toDisplay)
    activeOperation=""
    setDisplay()
    firstOperator=0;
    toDisplay=0
    activeDisplayString=""
}