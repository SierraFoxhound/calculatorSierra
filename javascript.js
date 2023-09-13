
let clearEntryBtn = document.querySelector(".clearEntryBtn");
let clearBtn = document.querySelector(".clearBtn");
let delBtn = document.querySelector(".delBtn");
let displayContainer = document.querySelector(".displayContainer")
let display = document.querySelector(".display");
let buttonContainer = document.querySelector(".buttonContainer");
let sevenBtn = document.querySelector(".sevenBtn");
let eightBtn = document.querySelector(".eightBtn");
let nineBtn = document.querySelector(".nineBtn");
let divideBtn = document.querySelector(".divideBtn");
let fourBtn = document.querySelector(".fourBtn");
let fiveBtn = document.querySelector(".fiveBtn");
let sixBtn = document.querySelector(".sixBtn");
let multiplyBtn = document.querySelector(".multiplyBtn");
let oneBtn = document.querySelector(".oneBtn");
let twoBtn = document.querySelector(".twoBtn");
let threeBtn = document.querySelector(".threeBtn");
let subtractBtn = document.querySelector(".subtractBtn");
let zeroBtn = document.querySelector(".zeroBtn");
let decimalBtn = document.querySelector(".decimalBtn");
let equalBtn = document.querySelector(".equalBtn");
let addBtn = document.querySelector(".addBtn");

//operator functions

function add(num1, num2) {
   return num1 + num2;
};

function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let num1 = 0;
let op = add() || subtract() || multiply() || divide();
let num2 = 0;

function operate(num1, op, num2) {
    switch (op.trim()) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
    } 
}

//console.log(operate(1, '-', 4));

//Display variable
let displayValue = "0";

function updateDisplaynumber(input) {
    //Check if input is a decimal point
    if(input === '.') {
        // If displayValue already contains a decimal point, ignore the input
        if(!displayValue.includes('.')) {
            displayValue += input;
        }
    } else {
        if(displayValue === "0") {
            displayValue = input.toString();//converts 0 to a string
        } else {
            //the + allows us to spam 1 multiple of times while also converting to string
            displayValue += input.toString();
        }
        //display.textContent = displayValue;//displays the number
    }
}

//print button numbers
decimalBtn.addEventListener('click', () => {
    updateDisplaynumber('.');
    display.textContent += '.';
});
zeroBtn.addEventListener('click', () => {
    updateDisplaynumber(0);
    display.textContent += '0';
});
oneBtn.addEventListener('click', () => {
    updateDisplaynumber(1);
    display.textContent += '1';
});
twoBtn.addEventListener('click', () => {
    updateDisplaynumber(2);
    display.textContent += '2';
});
threeBtn.addEventListener('click', () => {
    updateDisplaynumber(3);
    display.textContent += '3';
});
fourBtn.addEventListener('click', () => {
    updateDisplaynumber(4);
    display.textContent += '4';
});
fiveBtn.addEventListener('click', () => {
    updateDisplaynumber(5);
    display.textContent += '5';
});
sixBtn.addEventListener('click', () => {
    updateDisplaynumber(6);
    display.textContent += '6';
});
sevenBtn.addEventListener('click', () => {
    updateDisplaynumber(7);
    display.textContent += '7';
});
eightBtn.addEventListener('click', () => {
    updateDisplaynumber(8);
    display.textContent += '8';
});
nineBtn.addEventListener('click', () => {
    updateDisplaynumber(9);
    display.textContent += '9';
});

//functions for operator buttons
let operator = null;
let firstOperand = null;

function handleOperatorClick(op) {
    if(firstOperand === null) {
        firstOperand = parseFloat(displayValue);//shows the initial num
        operator = op;
        displayValue = "0";
        console.log(firstOperand);
    } else {
        if (op === '/' && parseFloat(firstOperand) === 0 && parseFloat(displayValue) === 0) {
            //
            display.textContent = "Error";
            displayValue = "0";
            firstOperand = null;
            operator = null;

        } else {
            //calculate and display result
            firstOperand = operate(firstOperand, operator, parseFloat(displayValue));
            operator = op;
            display.textContent = firstOperand;//result
            displayValue = "0";
        //console.log(firstOperand);
        }

    }
}

addBtn.addEventListener('click', () => {
    handleOperatorClick('+');
    display.textContent += '+';
});
subtractBtn.addEventListener('click', () => {
    handleOperatorClick('-');
    display.textContent += '-';
});
multiplyBtn.addEventListener('click', () => {
    handleOperatorClick('*');
    display.textContent += '*';
});
divideBtn.addEventListener('click', () => {
    handleOperatorClick('/');
    display.textContent += '/';
});

//eventListener/function for the equal button

equalBtn.addEventListener('click', () => {
    if (operator !== null) {
        firstOperand = operate(firstOperand, operator, parseFloat(displayValue));
        display.textContent = firstOperand;
        displayValue = '0';//allows result to be used
        operator = '+';
        console.log(firstOperand);
    }
});

function clearCalculator() {
    displayValue = " ";
    operator = null;
    firstOperand = null;
    display.textContent = displayValue;
}

clearBtn.addEventListener('click', () => {
    clearCalculator();
});


//incomplete backspace button

function backspace() {
    displayValue = displayValue.slice(0, -1)
    display.textContent = displayValue;
}

delBtn.addEventListener('click', () => {
    backspace();

});