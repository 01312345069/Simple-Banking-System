
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}



document.getElementById('btn-deposit').addEventListener('click', function () {

    /*
    1. get the element by id
    2. get the value from the element 
    3. convert string value to a number 
    */
    const newDepositAmount = getInputFieldValueById('deposit-field');
    /*
    1. get previous deposit total by id
    */
    const previousDepositTotal = getTextElementValueById('deposit-total');


    // calculate new deposit total 
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value 
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})