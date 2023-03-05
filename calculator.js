let result = 0;
let operator = "";

function addToResult(number) {
    document.getElementById("result").value += number;
}

function addOperator(newOperator) {
    operator = newOperator;
    result = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = "";
}

function clearResult() {
    result = 0;
    operator = "";
    document.getElementById("result").value = "";
}

function calculateResult() {
    let secondOperand = parseFloat(document.getElementById("result").value);
    switch(operator) {
        case "+":
            result += secondOperand;
            break;
        case "-":
            result -= secondOperand;
            break;
        case "*":
            result *= secondOperand;
            break;
        case "/":
            result /= secondOperand;
            break;
    }
    document.getElementById("result").value = result;
}
