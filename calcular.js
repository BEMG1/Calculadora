var displayValue = '';

function appendToDisplay(value) {

    if (value === '%') {
        displayValue += '/100';
    } else {

    displayValue += value;
    }
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calcular() {
    try {
     const result = eval(displayValue);
     document.getElementById('display').value = result;
     displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}