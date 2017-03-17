window.addEventListener("load", init);

function init() {
    "use strict";
    var calculator;
    calculator = document.getElementById("calculator").addEventListener("click", enter);
}
    
function enter(this.value) {
        var numberInput = e.value;
        document.getElementById("calculator").value += 0;
        e.stopPropagation();
    }

function calculate() {
    document.getElementById("result").eval();
}
