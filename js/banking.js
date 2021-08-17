// function dobuleIt(num){
//     const result = num * 2;
//     return result;
// }
// const first = dobuleIt(5);
// const second = dobuleIt(7);

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
   const inputAmountText = inputField.value;
   const amountValue = parseFloat(inputAmountText);
   // clear input field
   inputField.value = '';
   return amountValue;

}

function updateTotalFiled(totalFiledId, amount ){
    const totalElement = document.getElementById(totalFiledId);
    const totalText = totalElement.innerText;
    const previouseTotal = parseFloat(totalText);
    totalElement.innerText = previouseTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(depositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + depositAmount; 
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount; 
    }
}


document.getElementById('deposit-button').addEventListener('click', function() {
//    const depositInput = document.getElementById('deposit-input');
//    const depositAmountText = depositInput.value;
//    const depositAmount = parseFloat(depositAmountText);
//    console.log(depositAmount);

//  get current deposit

    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previouseDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previouseDepositTotal + depositAmount;
    // console.log(depositTotalText);  
      
    // Update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
   
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0) {
        updateTotalFiled( 'deposit-total',depositAmount);
        updateBalance(depositAmount, true);
    
    }
   
    // // clear input field
    // depositInput.value = '';
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function() {

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmounttText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmounttText);
       
    // update withdraw total
   
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previouswithdrawTotalText = withdrawTotal.innerText;
    // const previouswithdrawTotal = parseFloat(previouswithdrawTotalText);
    // withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;  
    
    // update balance input affter withdraw

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount ; 
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalFiled('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    // erro
    if(withdrawAmount > currentBalance){
      console.log('you can not withdraw more than what');
    }
   
    // // clear withdraw input filed
    // withdrawInput.value = '';

})