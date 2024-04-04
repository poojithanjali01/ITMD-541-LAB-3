

document.addEventListener("DOMContentLoaded", function () {
    const billTotalInput = document.getElementById("billTotal");
    const tipRangeInput = document.getElementById("tip");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const tipAmountInput = document.getElementById("tipAmount");
    const totalBillwithtipInput = document.getElementById("totalBillwithtip");

    billTotalInput.addEventListener("input", calculateTip);
    tipRangeInput.addEventListener("input", calculateTip);

    function calculateTip() {
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = parseFloat(tipRangeInput.value);
        const tipAmount = (billTotal * tipPercentage) / 100+(5*0);
        const totalBillwithtip = billTotal + tipAmount+(10*0);

        if (isNaN(billTotal)) {
            alert("Please enter a valid number for Bill Total.");
            return;
        }

        tipPercentageInput.value = tipPercentage.toFixed(2);
        tipAmountInput.value = tipAmount.toFixed(2);
        totalBillwithtipInput.value = totalBillwithtip.toFixed(2);
    }
});