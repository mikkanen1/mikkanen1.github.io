//set global variables
var i=0;
var j=0;
var k=0;
var doneItems=0;

//add items to list by pressing enter
var input=document.getElementById("createTask");
input.addEventListener("keypress", function(event) {
	if (event.keyCode === 13 ) {
		document.getElementById("button1").click();
	}
});

//find ul in document
var ul=document.getElementById("datat");

//list for storage
var listItems=[];

//load tasks from local storage
var teksti1=localStorage.getItem("tasks");

//turn localstorage data into array
var myArray=teksti1.split(",");

//Check for conditions and create a local storage array
if (myArray[0]=="") {
    myArray.shift();
}
for (var l=0; l<myArray.length; l++) {
    listItems.push(myArray[l]);
}

//add items on page load from localstorage
function addItemsOnLoad() {
    var button=document.createElement("button");
    var x=document.createElement("li")
    button.innerHTML=("X");
    x.numberValue=i;
    const listElement=document.querySelector("ul");
    var text1=document.createTextNode(myArray[i])
	if (myArray[i]=="") {
		x.classList="none";
	}

    if (myArray != "") {
	listElement.append(x);
	x.appendChild(text1);
    i++;

    if (x.textContent!=""){
	x.appendChild(button);
    x.classList=("li");
    }
}
//delete button functionality
    button.onclick=function(){
        button.parentElement.remove()
        delete listItems[x.numberValue];
        localStorage.setItem("tasks", listItems);
	};
}
	
//loop item add on load
function appendMultiple() {

	for (var j=0; j<myArray.length; j++) {
	addItemsOnLoad();
	};
}

//Create task function
function addItem() {

	var button=document.createElement("button");
    button.innerHTML=("X");
	var x = document.createElement("li");
	var task=document.getElementById("createTask").value;
	var t = document.createTextNode(task);
	var colorChange=document.getElementById("createTask");
    x.numberValue=i;
    
//check input and cancel if there's an issue, add red border on error

	if (task=="") {
		alert("The field must not be empty");
		colorChange.classList.add("error");
		return;
	}
	else if (task.length<2) {
		alert("Too short, minimum is 2 characters");
		colorChange.classList.add("error");
		return
	}
	else if (task.length>50) {
		alert("Too long, maximum is 50 characters");
		colorChange.classList.add("error");
		return;
	}
	else {

//place task to list for saving it
    listItems.push(task);

//on successful input, add task to list
	x.appendChild(t);
    x.classList=("li");

//Create a remove button for each new task
	x.appendChild(button);
	i++;
	document.getElementById("datat").appendChild(x);
	document.getElementById("createTask").value="";

//remove red border upon correct input
	colorChange.classList.remove("error");
	
//Remove button functionality
button.onclick=function(){
    button.parentElement.remove()
    delete listItems[x.numberValue];
    localStorage.setItem("tasks", listItems);
};  
}

//save tasks to local storage	
window.localStorage.tasks=listItems;
}	

//delete localStorage, ask if it's ok to remove everything
function removeItems() {
	var isOK=confirm("Oletko varma että haluat poistaa kaikki?");
	if (isOK==true) {
	listItems=[];
	window.localStorage.removeItem("tasks");
    window.localStorage.tasks=listItems;
	ul.innerHTML="";
    window.location.reload();
	}
}

//mark a task as done/undone and highlight it
var markDone = document.querySelector("ul");
markDone.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
	ev.target.classList.toggle("done");
}
}
)

//set items to localStorage
window.localStorage.tasks=listItems;

//clear red color regarding invalid input
function clearRed() {
    var form=document.getElementById("createTask");
    form.classList.add(".textArea");
}