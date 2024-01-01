"use strict";

window.onload = init;

function init() {
    loadTable();
}

function loadTable() {
    let tbody = document.getElementById("tblBody");

    fetch("http://localhost:8081/api/courses")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let row = tbody.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);

                cell1.innerHTML = data[i].dept;
                cell2.innerHTML = data[i].courseName;
                cell3.innerHTML = data[i].courseNum;

                // Create a link with an onclick event to call onLinkClicked (my friend 2cent)
                //removed event did it textbook way (pardonne moi mon ami mais ca marche pas)
                let anchor = document.createElement("a");
                anchor.href = `details.html?courseid=${data[i].id}`;
                anchor.text = "See details"; 
               

                cell4.appendChild(anchor);
            }
        });
}



