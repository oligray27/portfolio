function changeRate() {
    var value;
    var tempValue = prompt("Change hourly rate:", document.getElementById("rate").innerHTML)
    if (tempValue == null || tempValue == "") {
        value = document.getElementById("rate").innerHTML
    } else {
        document.getElementById("rate").innerHTML = tempValue;
    }
}

var grandTotal = 0;

function addRecord() {
    var shiftLength = parseFloat(document.getElementById("shiftLength").value)
    var shiftAmount = document.getElementById("shiftAmount").value

    var rate = document.getElementById("rate").innerHTML
    var ul = document.getElementById("shiftList");
    var earned = (shiftLength * parseFloat(shiftAmount)) * parseFloat(rate)
    var total = shiftAmount + " " + shiftLength + " hour shift(s) @ £" + rate + " per hour. TOTAL: £ " + earned;


    if (isNaN(shiftLength)) {
        alert("Length of shifts is empty or invalid.")
    } else {

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(total));

      
          ul.appendChild(li)

        grandTotal = grandTotal + earned;
        document.getElementById("grandTotal").innerHTML = grandTotal.toFixed(2)
        
    }
}

function remove() {
    var ul = document.getElementById("shiftList")
    while( ul.firstChild ){
        ul.removeChild( ul.firstChild );
      }
    
      grandTotal = 0
      document.getElementById("grandTotal").innerHTML = ""
}

function premium() {
    var x = document.getElementById("rate").innerHTML
    if (document.getElementById("check").checked) {
        document.getElementById("rate").innerHTML = parseFloat(x) * 1.25
    } else {
        document.getElementById("rate").innerHTML = parseFloat(x) * .80
    }

}





