"use strict";

window.onload = init;

function init() {
    const addCourseBtn = document.getElementById('addCourseBtn');
    addCourseBtn.addEventListener('click', addCourse);
}

function addCourse() {
    const newCourseForm = document.getElementById('newCourseForm');
    const formData = new FormData(newCourseForm);

    if (!formData.get('department') || !formData.get('title') || !formData.get('number') || !formData.get('instructor') || !formData.get('startDate') || !formData.get('numDays')) {
        alert('Please enter data in all fields.');
        return;
    }

    const newCourseData = {};
    formData.forEach((value, key) => {
        newCourseData[key] = value;
    });

    fetch('http://localhost:8081/api/courses', { // fix this error
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourseData),
    })
  .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log('New course added:', data);
    alert('New course added successfully!');
    window.location.href = 'details.html';
})
.catch(error => {
    console.error('Error adding new course:', error);
    alert('An error occurred while adding a new course. Please try again.');
});
}
