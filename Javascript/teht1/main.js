let addToDoButton  = document.getElementById('addToDo');
let toDoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField')

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('P');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild();
    })
})