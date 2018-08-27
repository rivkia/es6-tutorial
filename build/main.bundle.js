'use strict';

var calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {
    debugger;
    var monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
    return monthlyPayment;
};

document.getElementById('calcBtn').addEventListener('click', function () {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    var monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
});

var NumberApi = function NumberApi(number) {
    return fetch('http://numbersapi.com/' + number + '/year').then(function (response) {
        return response.text();
    });
};

async function init() {
    var result = await NumberApi(20);
    console.log(result);
}

//# sourceMappingURL=main.bundle.js.map