// function dobuleIt(num){
//     const result = num * 2;
//     return result;
// }
// const first = dobuleIt(5);
// const second = dobuleIt(7);

function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
   const depositAmountText = depositInput.value;
   const depositAmount = parseFloat(depositAmountText);
   // clear input field
   depositInput.value = '';
   return depositAmount;

}


document.getElementById('deposit-button').addEventListener('click', function() {
//    const depositInput = document.getElementById('deposit-input');
//    const depositAmountText = depositInput.value;
//    const depositAmount = parseFloat(depositAmountText);
const depositAmount = getInputValue();
//    console.log(depositAmount);
//  get current deposit
    const depositTotal = document.getElementById('deposit-total');

    const depositTotalText = depositTotal.innerText;
    const previouseDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previouseDepositTotal + depositAmount;
    // console.log(depositTotalText);  
      
    // Update balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; 

    // // clear input field
    // depositInput.value = '';
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function() {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmounttText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmounttText);
    
    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalText);

    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;

    // update balance input affter withdraw
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount ; 

    // clear withdraw input filed
    withdrawInput.value = '';

})