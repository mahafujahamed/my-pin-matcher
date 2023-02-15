function getPin() {
    const pin = genetarePin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

// pin generate
function genetarePin() {
    const random = Math.round(Math.random() * 1000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {

        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccesMessage = document.getElementById('pin-succes');
    const pinFailureMessage = document.getElementById('pin-failure');
    if (typedNumber === currentPin) {

        pinSuccesMessage.style.display = 'block';

        pinFailureMessage.style.display = 'none';
    }
    else {

        pinFailureMessage.style.display = 'block';
        pinSuccesMessage.style.display = 'none';
    }
})