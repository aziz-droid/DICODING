const kalkulator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false
}

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = kalkulator.displayNumber;
}
console.log(kalkulator.displayNumber);

function clearKalkulator() {
    kalkulator.displayNumber = '0',
        kalkulator.operator = null,
        kalkulator.firstNumber = null,
        kalkulator.isWaitForSecondNumber = false
}

function inputDigit(digit) {
    kalkulator.displayNumber += digit
}

const buttons = document.querySelectorAll('.button')

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const target = event.target;
        console.log(target);

        inputDigit(target.innerText)
        updateDisplay();
    })

}


