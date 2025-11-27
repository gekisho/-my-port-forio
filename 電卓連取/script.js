const display = document.getElementById("display");
const nums = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".op");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

let currentInput = "";
let operator = "";
let previousInput = "";

// 数字ボタン
nums.forEach(btn => {
    btn.addEventListener("click", () => {
        currentInput += btn.textContent;
        display.value = currentInput;
    });
});

// 演算子ボタン
ops.forEach(btn => {
    btn.addEventListener("click", () => {
        if (currentInput === "") return;
        previousInput = currentInput;
        operator = btn.textContent;
        currentInput = "";
    });
});

// クリア
clear.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
});

// イコール
equals.addEventListener("click", () => {
    if (currentInput === "" || previousInput === "" || operator === "") return;

    const a = parseFloat(previousInput);
    const b = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
    }

    display.value = result;
    currentInput = result.toString();
    previousInput = "";
    operator = "";
});
