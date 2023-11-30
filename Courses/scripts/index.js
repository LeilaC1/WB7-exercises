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
            // tr
            for (let i = 0; i < data.length; i++) {
                let row = tbody.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);

                cell1.innerHTML = data[i].dept;
                cell2.innerHTML = data[i].courseName;
                cell3.innerHTML = data[i].courseNum;
                cell4.innerHTML = '<a href="details.html">Show Details</a>';
            }
        });
}
