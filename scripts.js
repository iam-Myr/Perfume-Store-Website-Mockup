'use strict';

var perf1_price = 3.00;
var perf2_price = 4.00;
var perf3_price = 6.00;

function getPerfPrice(){
    var selection = document.getElementById("perfumes").selectedIndex;
    if (selection == 0) return 0;
    return +document.getElementById("perf_price").innerText;
}

function getSizePrice(){
    var radios = document.getElementsByName('sizes');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            var nextTd = radios[i].parentNode.nextElementSibling;
            return +nextTd.textContent;
        }
    }
    return 0;
}

function getExtraPrice(){
    var sum = 0;

    var extras = document.getElementsByName('extras');
    for (var i = 0; i < extras.length; i++) {
        if (extras[i].checked) {
            var nextTd = extras[i].parentNode.nextElementSibling;
            sum += +nextTd.textContent;
        }
    }
    return sum;
}

function setPerfPrice(){
    var selection = document.getElementById("perfumes").selectedIndex;

    switch(selection) {
        case 1:
            document.getElementById('perfTitle').innerHTML = document.getElementById("perf1").value;
            document.getElementById("perf_price").innerHTML = perf1_price;
            document.getElementById('perfImg').src='images/perf1.jpg'
        break;
        case 2:
            document.getElementById('perfTitle').innerHTML = document.getElementById("perf2").value;
            document.getElementById("perf_price").innerHTML = perf2_price;
            document.getElementById('perfImg').src='images/perf2.jpg'
        break;
        case 3:
            document.getElementById('perfTitle').innerHTML = document.getElementById("perf3").value;
            document.getElementById("perf_price").innerHTML = perf3_price;
            document.getElementById('perfImg').src='images/perf3.jpg'
        break;
        default:
            document.getElementById("perf_price").innerHTML = 0.00;
            document.getElementById('perfImg').src='images/logo.png'
    }
}

function calculateCost() {
    var cost = getPerfPrice() + getSizePrice() + getExtraPrice();
    document.getElementById("total").value = cost + "$";
}

function playAudio(audID) {
    var sound = document.getElementById(audID);
    sound.play();
}
