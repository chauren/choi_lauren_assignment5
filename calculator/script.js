window.addEventListener("load", init);

function init() {
    "use strict";
    var calculator = document.querySelector("#calculator"); calculator.addEventListener("click", function enter(e), false);
}
    
function enter(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        document.getElementById("calculator").value += e.target.value;
    }
        e.stopPropagation();
    }

function calculate() {
    document.getElementById("result").eval();
}
