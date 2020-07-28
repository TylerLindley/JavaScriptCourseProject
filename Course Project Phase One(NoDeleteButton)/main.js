////Setting up my variables using the dom select queries

let addItemButton = document.getElementById('toDoButton');
let div = document.querySelector('div');
let ol = document.getElementById('orderedList');
let toDoInput = document.querySelector('input');
let counter = 0;


//When this is clicked, it will start the function "Add Element" which creates the to-do.
addItemButton.addEventListener('click', addElement);

//When the button previously is clicked, it will invoke this function, which creates a div and li, appending the li, 
//giving the li the input that the user has put in the input textbox, and creates a checkbox/delete button beside it.

function addElement() {
    let div = document.createElement('div');
    let li = document.createElement('li');
    li.innerHTML = toDoInput.value + '   ' + '<input id="checkbox" type="checkbox"> ' + ' <button class="delete"> Delete <img src="Screenshots/trashCan.png" alt="trashCan" width="25" height="30"> </button>';
    ol.appendChild(div);
    div.appendChild(li);
    let button = document.getElementsByClassName('delete');
    let checkBox = document.querySelector('input[type="checkbox"]');
    for (let i = 0; i < button.length; i++) {
        //iterates through the buttons to find which button correlates with what's clicked (to delete that specific to-do)
        button[i].addEventListener('click', deleteToDo);
    }

    //when checkbox is clicked, will change the colour and add a strikethrough decoration (or if its already changed, will change back to black)
    checkBox.addEventListener('click', changeColour);
}

//When the delete button is clicked, the audio (ding) will play.

function ding() {
    document.getElementById("audio").play();
}

//Changing the colour to green and giving it a strikethrough when the to-do is completed/clicked.

function changeColour(e) {
    let li = e.target.closest('li');

    //When clicked the first time, it will turn green with a strikethrough decorting and turn the counter to =1. 
    //When clicked a second time, it checks if the counter is =1, if it is it will take away the decorations.
    if (counter == 0) {
        li.style.textDecoration = 'line-through';
        li.style.color = 'green';
        counter++;
        ding();
    } else if (counter == 1) {
        li.style.textDecoration = 'none';
        li.style.color = 'black';
        counter = 0;
    }
}

function deleteToDo(e) {
    let deletedToDo = e.target;
    let parent = deletedToDo.parentElement;
    parent.remove(deletedToDo);
}