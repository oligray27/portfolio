function getArraySum(a) {
    var total = 0;
    for (var i in a) {
        total += a[i];
    }
    return total;
}

var array = [];

function myFunction(x) {
    console.log("Row index is: " + x.rowIndex);
    array.splice(x, 1);
    console.log(array);
    document.getElementById("grandTotal").innerHTML = getArraySum(array).toFixed(2);
}

$(document).ready(function () {
    $(".add-new").click(function () {

        var hours = ($("#hours").val());
        var shifts = ($("#length").val());
        var rate = ($("#rate").val());

        var earned = (hours * shifts) * rate;

        array.push(earned);

        console.log(array);
        document.getElementById("grandTotal").innerHTML = getArraySum(array).toFixed(2);

        var row = '<tr onclick="myFunction(this)">' +
            '<td>' + shifts + '</td>' +
            '<td>' + hours + '</td>' +
            '<td>' + "£ " + rate + '</td>' +
            '<td class="delete"><i class="material-icons"">&#xE872;</i></td>' +
            '</tr>';
        $("table").append(row);
    });

    $(document).on("click", ".delete", function () {
        $(this).parents("tr").remove();
    });

    $("#check").click(function () {

        var x = ($("#rate").val());

        if (!$("#check").hasClass("active")) {
            $("#rate").val(x * 1.25);
            document.getElementById("check").innerHTML = "Enabled";
        } else {
            $("#rate").val(x * .80);
            document.getElementById("check").innerHTML = "Disabled";
        }
    });
});
