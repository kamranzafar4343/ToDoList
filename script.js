const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

    if(inputBox.value === ''){
        alert("Please add some task");
    }

    else{
        const li = document.getElementById("li"); //stores li
        li.innerHTML = inputBox.value; //stores value entered by user in input box
        listContainer.appendChild(li); //displays the li
    }
}