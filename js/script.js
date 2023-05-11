function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Yucky";
    }
    return a / b;
}

function operator(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Error: Wrong operator";
    }
}


let operationArray = {
    firstNum: null,
    operatorSymbol: null,
};


function addNumber(number) {
    let display = document.getElementById("display");
    let displayText = display.value;
    if (displayText === "0" ||
        displayText === "." ||
        displayText.match(/^[A-Za-z]*$/) ||
        operationArray.operatorSymbol) {
        display.value = number;
    } else {
        display.value = displayText + number;
    };
};


function addOperator(symbol) {
    if (operationArray.firstNum && operationArray.operatorSymbol) {
        equals();
        if (operationArray.firstNum === "Yucky") { clearAll(true); }
        else { operationArray.operatorSymbol = symbol; };
    } else {
        operationArray.firstNum = Number(display.value);
        operationArray.operatorSymbol = symbol;
    };
}


function clearAll(boolVal) {
    operationArray = {
        firstNum: null,
        operatorSymbol: null,
        secondNum: null
    };
    if (!boolVal) { display.value = '0'; };
};


function equals() {
    if (operationArray.firstNum && display.value) {
        let result = operator(operationArray.operatorSymbol,
            operationArray.firstNum,
            Number(display.value));
        display.value = result;
        operationArray.firstNum = result;
    };
    return;
};


function addDecimal() {
    if (display.value.includes(".")) { return; }
    display.value += ".";
};


function deleteLast() {
    if (display.value.length > 0) { display.value = display.value.slice(0, -1); };
};