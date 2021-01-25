function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    setRate();

}
function setRate(){
document.getElementById("rate").innerHTML = parseInt( getCookie("rate"));

 }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function checkCookie() {
    var rate = getCookie("rate");
    if (rate != "") {
        //alert("Welcome again " + user);
    } else {
        rate = prompt("Please enter your hourly rate (e.g. 9.50):", "");
        if (rate != "" && rate != null &&  !isNaN(rate)) {
            setCookie("rate", rate, 30);
        }
        else{
            alert("Please enter a valid number")
            checkCookie();
        }
    }
}

function removeCookies() {
    var list = decodeURIComponent(document.cookie);
    var ca = list.split(';');

    for (i = 0; i < ca.length; i++) {
        setCookie(ca[i], "", -30)
    }

    location.reload();
}