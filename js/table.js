let foods = [];
const table = document.getElementById('foodTable');

function insertElement() {
    let food = $('#foodName').val().trim();

    if (food) {
        $('#foodName').val('');
        foods.push(food);
        let tbody;

        //Checks if tbody exists
        if (!$('#tableBody').length) {
            tbody = table.createTBody();
            tbody.id = "tableBody";
        } else {
            tbody = document.getElementById('tableBody');
        }

        let row = tbody.insertRow();
        let td = document.createElement("td");
        let text = document.createTextNode(food);
        td.appendChild(text);
        row.appendChild(td);

        text = document.createTextNode(moment(new Date()).format("DD/MM/YYYY"));
        cell = row.insertCell();
        cell.appendChild(text);

        //Where to put this?? 
        $('#table').css('display','block');
    }

    $('#foodName').focus();
}


$( document ).ready(function() {
    $("#foodName").keyup(function(event) {
        if (event.key !== "Enter") 
            return false; // Use `.key` instead.
        
        insertElement()
        event.preventDefault(); // No need to `return false;`.
      });
});

window.onload = function () {
    loadList();

    if ($('#tableBody').length) {
        $('#table').css('display', 'block');
    }

    $('#foodName').focus();
}

function loadList() {
    if (foods && foods.length > 0) {
        createTableBody(foods);
    }
}

function reorder() {
    save();
    foods = sortList(foods);
    replaceCellsContent(foods);
}

function replaceCellsContent(foods) {
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = foods[i - 1];
    }
}

function save() {
    //save to db
}