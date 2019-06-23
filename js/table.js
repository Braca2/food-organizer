let foods = [];
const table = document.getElementById('foodTable');

function insertElement() {
    let food = document.getElementById('foodName').value.trim();
    document.getElementById("foodName").value = '';

    if (food) {
        foods.push(food);
        let tbody;

        //Checks if tbody exists
        if (!document.getElementById("tableBody")) {
            tbody = table.createTBody();
            tbody.id = "tableBody";
        } else {
            tbody = document.getElementById("tableBody");
        }

        let row = tbody.insertRow();
        let td = document.createElement("td");
        let text = document.createTextNode(food);
        td.appendChild(text);
        row.appendChild(td);

        let date = new Date();
        text = document.createTextNode(date.toDateString());
        cell = row.insertCell();
        cell.appendChild(text);

        //Where to put this?? 
        document.getElementById("table").style.display = 'block';
    }
    document.getElementById("foodName").focus();
}

document.querySelector("#foodName").addEventListener("keyup", event => {
    if (event.key !== "Enter") return; // Use `.key` instead.	
    document.querySelector("#insertButton").click(); // Things you want to do.	
    event.preventDefault(); // No need to `return false;`.
});

window.onload = function () {
    loadList();
    if (document.getElementById("tableBody")) {
        document.getElementById("table").style.display = 'block';
    }
    document.getElementById("foodName").focus();
}

function loadList() {
    if (foods.length > 0) {
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