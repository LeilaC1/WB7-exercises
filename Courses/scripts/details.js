"use strict";

window.onload = function() {
    const urlParams = new URLSearchParams(location.search);
    let id = -1;

    if (urlParams.has("courseid") === true){
                id = urlParams.get("courseid");

        // make an AJAX call
        fetch(`http://localhost:8081/api/courses/${id}`)
            .then(response => response.json())
            .then(data => {
                displayCourseDetails(data);
            })
    }
};

function displayCourseDetails(course) {
    // Console test ( my friends 2cent)
    console.log("Course Name: ", course.courseName);
    console.log("Instructor: ", course.instructor);
    console.log("Start Date: ", course.startDate);
    console.log("Number of Days: ", course.numDays,);
    // display in browser
let result = document.getElementById("result");

result.innerHTML =
 `Course Name: ${course.courseName}<br>
Instructor: ${course.instructor}<br>
Start Date: ${course.startDate}<br>
Number of Days: ${course.numDays} <br>`;

}
