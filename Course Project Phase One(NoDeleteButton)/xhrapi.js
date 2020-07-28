let calendar = document.getElementById('calendar');
let button = document.getElementById('choresButton');

//Store the request URL create a new XHR object.
let requestURL = "https://tylerpitik.github.io/todos.json/todos.json";

//Create a new XHR Object
let request = new XMLHttpRequest();

//Open the request

request.open('GET', requestURL);

//set up response type
request.responseType = 'json';

//send the request using send () 
request.send();

button.onclick = request.reponse = function () {
    let todos = request.response;
    chores(todos);
    console.log('Thank you Jessica for the great class, I have learned a lot of fun JavaScript.');
};

function chores(jsonObj) {
    let chores = jsonObj['toDos'];
    let button = document.getElementsByClassName('delete');
    for (let i = 0; i < chores.length; i++) {    
        let div = document.querySelector('ol');
        let description = document.createElement('li');
        let minutesToComplete = document.createElement('p');
        let dueDate = document.createElement('p');

        description.innerHTML = chores[i].description + '<input id="checkbox" type="checkbox"> ' + ' <button class="delete"> Delete <img src="Screenshots/trashCan.png" alt="trashCan" width="25" height="30"> </button>';
        minutesToComplete.innerHTML = chores[i].minutesToComplete + ' <button class="delete"> Delete <img src="Screenshots/trashCan.png" alt="trashCan" width="25" height="30"> </button>';;
        dueDate.innerHTML = chores[i].dueDate +  ' <button class="delete"> Delete <img src="Screenshots/trashCan.png" alt="trashCan" width="25" height="30"> </button>';

        div.appendChild(description, minutesToComplete, dueDate);
        div.appendChild(minutesToComplete);
        div.appendChild(dueDate);
        calendar.appendChild(div);
        button[i].addEventListener('click', deleteToDo);

    }
}

function deleteToDo(e) {
    let deletedToDo = e.target;
    let parent = deletedToDo.parentElement;
    parent.remove(deletedToDo);
}