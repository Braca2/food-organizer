function sortList(foods) {
    let sortedList = getNewList(foods);
    console.log(sortedList);
    return sortedList;
}

function getNewList(foods) {
    let orderedList = [];
    let cont = foods.length;

    while (cont > 0) {
        let randomId = getRandomId(cont);
        orderedList.push(foods[randomId]);
        foods.splice(randomId, 1);
        cont--;
    }

    return orderedList;
}

function getRandomId(limit){
    return Math.floor((Math.random() * limit));
}