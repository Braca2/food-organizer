let foods = [{}];

function insertElement() {
    let food = document.getElementById('foodName').value;
    if (food) {
        document.getElementById("foodName").value = '';
        foods.push(food);

        let table = document.querySelector("table");
        let row = table.insertRow();
        // let th = document.createElement("th");
        // let text = document.createTextNode(food);
        // th.appendChild(text);
        // row.appendChild(th);

        let cell = row.insertCell();
        let text = document.createTextNode(food);
        cell.appendChild(text);
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
    document.getElementById("foodName").focus();
}
