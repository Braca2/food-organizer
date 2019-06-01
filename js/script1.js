//CREAR TABLA

let mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
];

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

let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTable(table, mountains);
generateTableHead(table, data);

/////////////////////////////////////////////////////////////////////////////////////

function Save() {
    const userAction = async () => {
        const response = await fetch('file:///C:/Projects/Web/project1/project1.html', {
            method: 'POST',
            body: myBody, // string or object
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const myJson = await response.json(); //extract JSON from the http response
        // do something with myJson
    }
}

function GET2() {
    fetch('http://localhost:3001/api/movies')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
        });
}

///////////////////////////////////////////////////////////////////////////////////////////////
// ESTO FUNCIONA
var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            console.log(movie.title)
        })
    } else {
        console.log('error')
    }
}

request.send()

function GET() {
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    //request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
    request.open('GET', 'http://localhost:3001/api/movies', true);

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            data.forEach(movie => {
                console.log(movie.title)
            })
        } else {
            console.log('error')
        }
    }

    // Send request
    request.send();
}