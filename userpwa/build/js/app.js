"use strict"

const peopleListElement = document.getElementById('peopleList');

fetch('https://jsonplaceholder.typicode.com/users')
.then(
    response => response.json()
).then( 
    data => data.map(populatePersonData)
);

//********************/

function createNewElement(element) {
    return document.createElement(element);  
}

function appendToParent(parentElement, childelement) {
    return parentElement.appendChild(childelement);  
}

function populatePersonData(person) {
    let li = createNewElement('li');
    let span = createNewElement('span');     
    li.innerHTML = person.name;
    span.innerHTML = person.email;
    appendToParent(li, span);
    appendToParent(peopleListElement, li);
}
