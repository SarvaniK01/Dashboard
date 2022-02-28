const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', displayDetails);

var row = 1;

function displayDetails () {
    var heading = document.getElementById("articleHeading").value;
    var content = document.getElementById("articleContent").value;
    var url = document.getElementById("articleImage").value;
    var date = document.getElementById("articleDate").value;

    if(!heading || !content || !url || !date){
        alert("Please fill all the boxes");
        return;
    }
}

var display = document.getElementById("display");

var newRow = display.insertRow(row);

var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell2 = newRow.insertCell(2);
var cell2 = newRow.insertCell(3);
