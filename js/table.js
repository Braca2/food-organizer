let foods = [{}];

function insertElement() {
    let food = document.getElementById('foodName').value;
    document.getElementById("foodName").value = '';

    if (food.trim()) {
        foods.push(food);

        let table = document.querySelector("table");
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

// Make sure this code gets executed after the DOM is loaded.
document.querySelector("#foodName").addEventListener("keyup", event => {
    if (event.key !== "Enter") return; // Use `.key` instead.
    document.querySelector("#insertButton").click(); // Things you want to do.
    event.preventDefault(); // No need to `return false;`.
});

window.onload = function () {
    if (!document.getElementById("tableBody")) {
        document.getElementById("table").style.display = 'none';
    }
    document.getElementById("foodName").focus();
}
