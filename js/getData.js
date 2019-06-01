// Get data from backend

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

// let table = document.querySelector("table");
// let data = Object.keys(mountains[0]);
// generateTable(table, mountains);
// generateTableHead(table, data);

fetch('http://localhost:3001/api/movies', {
  // 'mode': "no-cors",
  // 'content-Type': 'text/plain'
})
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
    else {
      console.log("Error aca");
    }
  })
  .then(function (myJson) {
    let table = document.querySelector("table");
    let data = Object.keys(myJson[0]);
    generateTable(table, myJson);
    generateTableHead(table, data);
    console.log(myJson);
  })
  .catch(function (error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });

// fetch('http://localhost:3001/api/movies', {
// })
//     .then(function (response) {
//         console.log(response);
//         console.log(response.json());
//     });
/////////////////////////////////////
// const https = require("https");
// const url = "https://jsonplaceholder.typicode.com/posts/1";
// https.get(url, res => {
//   res.setEncoding("utf8");
//   let body = "";
//   res.on("data", data => {
//     body += data;
//   });
//   res.on("end", () => {
//     body = JSON.parse(body);
//     console.log(body);
//   });
// });
///////////////////////////////////////
// const http = new XMLHttpRequest()

// // http.open("GET", "https://api.lyrics.ovh/v1/toto/africa")
// http.open("GET", "http://localhost:3001/")
// http.send()

// http.onload = () => console.log(http.responseText)