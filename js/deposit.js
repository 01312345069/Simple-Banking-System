
function getInputFieldvalueById(inputFieldId) {
    const inputField = document.getElementById('inputFieldId');
    const inputFieldValueString = inputFieldId.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const getElementValueString = element.innerText;
    const value = parseFloat(getElementValueString);
    return value;
}



document.getElementById('btn-deposit').addEventListener('click', function () {

    /*
    get the element by id
    get the value from the element 
    convert string value to a number 
    */
    const newDepositAmount = getInputFieldvalueById('deposit-field');
})