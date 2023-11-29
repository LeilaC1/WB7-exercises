"use strict"

window.onload = init;



function init(){
    
    
    document.getElementById("btn").addEventListener("click", onBtnClicked);
    
}
function onBtnClicked(){
    let inputID = document.getElementById("inputID").value;
    let messageDiv = document.getElementById("messageDiv");
    
    let todoAPI = `https://jsonplaceholder.typicode.com/todos/${inputID}`;
    fetch(todoAPI)
    .then(response => response.json())
    .then (data => { 
        let message = "Users To Do: " + data.title;
        messageDiv.innerHTML = message;
    });


}