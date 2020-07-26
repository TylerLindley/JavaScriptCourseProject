////Setting up my variables using the dom select queries

let addItemButton = document.getElementById('toDoButton');
let deleteToDoButton = document.getElementsByClassName('delete');
let checkBox = document.querySelectorAll('input');
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
        //When the li is clicked, it will invoke the change colour and ding functions. When it's double clicked it will delete the to-do.
    let button = document.getElementsByClassName('delete');
    
    for(let i = 0; i < button.length; i++) {
        //which element do we want to add the event listener to? Not the li, but the delete button itself .....
        
        button[i].addEventListener('click', deleteToDo);
    }

    //Only allows the click on the first checkbox, not all.
    let checkBox = document.getElementById('checkbox');
    
    //when checkbox is clicked, will change the colour and add a strikethrough decoration
    //(or if its already changed, will change back to black)
    checkBox.addEventListener('click', changeColour); 
}

//When the delete button is clicked, the audio (ding) will play.

function ding() {
    document.getElementById("audio").play();
}

//Changing the colour to green and giving it a strikethrough when the to-do is completed/clicked.

function changeColour(e) {
    //the target property of the event object lets us know the element that the event (click) happened on (in this case, the checkbox. Once we know which element was clicked on, we can use DOM traversal to navigate the li sibling element 

    let li = e.target.closest('li'); 

    //When clicked the first time, it will turn green with a strikethrough decorting and turn the counter to =1. 
    //When clicked a second time, it checks if the counter is =1, if it is it will take away the decorations.
    if (counter == 1) {
        li.style.textDecoration = 'none';
        li.style.color = 'black';
        counter = 0;
    }
    else if(li.textDecoration != 'line-through') {
        li.style.textDecoration = 'line-through'; 
        li.style.color = 'green';
        counter++;
        ding();
    }
}
//This function is pulled when the li is double clicked, it deletes the child of the ordered list (li) that is clicked.

function deleteToDo(e) {
    let deletedToDo = e.target;
    let parent = document.querySelector('div');
    parent.remove(deletedToDo);
} 