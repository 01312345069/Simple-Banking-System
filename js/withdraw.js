/*
1. add withdraw button event handler 
2. get withdraw amount by using getInputFieldValueById function 
3. get previous withdraw amount by using getTextElementValueById function 
4. calculate new withdraw total and set the value 
4.5 set new withdraw total by using setTextElementValueById function 
5. get previous balance total by using getTextElementValueById function 
6. calculate new balance total
*/

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithDrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithDrawTotal = previousWithdrawTotal + newWithDrawAmount;
    setTextElementValueById('withdraw-total', newWithDrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})