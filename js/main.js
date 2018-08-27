let calculateMonthlyPayment = function (principal, years, rate) {
    debugger;
    let monthlyRate=0;
    if (rate) {
         monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    return monthlyPayment;
};

document.getElementById('calcBtn').addEventListener('click', function () {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
});

let NumberApi= number=> fetch(`http://numbersapi.com/${number}/year`)
    .then(response => response.text())

async function init(){
    let result = await NumberApi(20);
    console.log(result);
}
