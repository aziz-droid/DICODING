const kalkulator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false
}

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = kalkulator.displayNumber;
}
updateDisplay()




function inputDigit(digit) {
    if (kalkulator.displayNumber === '0') {
        kalkulator.displayNumber = digit;
    } else {
        kalkulator.displayNumber += digit;
    }

}

const buttons = document.querySelectorAll('.button')

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const target = event.target;
        console.log(target);

        if (target.classList.contains('clearr')) {
            clearKalkulator();
            updateDisplay();
            return
        }
        function clearKalkulator() {
            kalkulator.displayNumber = '0';
            kalkulator.operator = null;
            kalkulator.firstNumber = null;
            kalkulator.isWaitForSecondNumber = false;
        }
        if (target.classList.contains('negative')) {
            negativeNumber();
            updateDisplay();
            return
        }
        function negativeNumber() {
            if (kalkulator.displayNumber === '0') {
                return;
            } else {
                kalkulator.displayNumber *= - 1;
            }
        }
        if (target.classList.contains('operator')) {

            operatorNumber(target.innerHTML);

            updateDisplay();
            return
        }
        function operatorNumber(operator) {
            if (!kalkulator.isWaitForSecondNumber) {
                kalkulator.operator = operator;
                kalkulator.isWaitForSecondNumber = true;
                kalkulator.firstNumber = kalkulator.displayNumber;
                kalkulator.displayNumber = '';
            }
            else {
                alert('operator sudah ditetapkan')
            }
        }
        if (target.classList.contains('equals')) {
            equalsButton();
            updateDisplay();
            return
        }
        function equalsButton() {
            if (kalkulator.firstNumber == null || kalkulator.operator == null) {
                return;
            }
            let result = 0;
            if (kalkulator.operator == '+') {
                result = parseInt(kalkulator.firstNumber) + parseInt(kalkulator.displayNumber)
            } else {
                result = parseInt(kalkulator.firstNumber) - parseInt(kalkulator.displayNumber)
            }
            const history = {
                firstNumber: kalkulator.firstNumber,
                secondNumber: kalkulator.displayNumber,
                operator: kalkulator.operator,
                result: result
            }
            putHistory(history)
            kalkulator.displayNumber = result
            renderHistory()


        }



        inputDigit(target.innerHTML)
        updateDisplay();


    })


}


