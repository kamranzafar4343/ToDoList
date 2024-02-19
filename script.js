const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

    if(inputBox.value === ''){
        alert("Please add some task");
    }

    else{
        let li = document.createElement("li"); //create li element and stores in li variable
        li.innerHTML = inputBox.value; //stores input box's values
        listContainer.appendChild(li); //displays the li
    }

    innerHTML="";
}