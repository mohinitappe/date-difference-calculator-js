function calculateDifference() {
    var date1String = document.getElementById("date1").value;
    var date2String = document.getElementById("date2").value;

    // Check if both dates are entered
    if (!date1String || !date2String) {
        alert("Please enter both dates.");
        return;
    }

    // Create Date objects from input values
    var date1 = new Date(date1String);
    var date2 = new Date(date2String);

    // Check if both dates are valid
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        alert("Please enter valid dates.");
        return;
    }

    // Calculate the difference in milliseconds
    var difference = Math.abs(date2 - date1);

    // Convert milliseconds to days
    var differenceInDays = Math.ceil(difference / (1000 * 60 * 60 * 24));

    // Display the result
    document.getElementById("result").innerHTML = "Difference: " + differenceInDays + " days";
}
