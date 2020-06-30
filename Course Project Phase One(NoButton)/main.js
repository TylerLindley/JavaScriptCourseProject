//Setting up my variables using the dom select queries

let addItemButton = document.querySelectorAll('button')[0];
let deleteToDoButton = document.getElementById('delete');
let checkBox = document.getElementById('checkbox');
let div = document.querySelector('div');
let ol = document.getElementById('orderedList');
let toDoInput = document.querySelector('input');


//When this is clicked, it will start the function "Add Element" which creates the to-do.
addItemButton.addEventListener('click', addElement);

//Changing the colour to green and giving it a strikethrough when the to-do is completed/clicked.
function changeColour(e) {
    let li = e.target;
    li.setAttribute("style", "text-decoration: line-through");
    li.style.color = 'green';
}

//When the button previously is clicked, it will invoke this function, which creates a div and li, appending the li, 
//giving the li the input that the user has put in the input textbox, and creates a checkbox/delete button beside it.
function addElement() {
    let li = document.createElement('li');
    li.innerHTML = toDoInput.value + '   ' + '<input id="checkbox" type="checkbox"> ' + ' <button id="delete"> Delete <img src="Screenshots/trashCan.png" alt="trashCan" width="25" height="30"> </button>';
    ol.appendChild(li);

    //When the li is clicked, it will invoke the change colour and ding functions. When it's double clicked it will delete the to-do.

    li.addEventListener('dblclick', deleteToDo);
    li.addEventListener('click', changeColour);
    li.addEventListener('click', ding);
}



//When the delete button is clicked, the audio (ding) will play.
function ding() {
    document.getElementById("audio").play();
}

//This function is pulled when the li is double clicked, it deletes the child of the ordered list (li) that is clicked.
function deleteToDo(e) {
    let deletedToDo = e.target;
    let parent = document.querySelector('ol');
    parent.removeChild(deletedToDo);
}