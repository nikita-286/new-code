document.getElementById("volunteerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data from both sides
    const formData = new FormData();
    const leftForm = document.getElementById("volunteerForm");
    const rightForm = document.getElementById("additionalDetails");
    const leftFormData = new FormData(leftForm);
    const rightFormData = new FormData(rightForm);

    for (const pair of leftFormData.entries()) {
        formData.append(pair[0], pair[1]);
    }

    for (const pair of rightFormData.entries()) {
        formData.append(pair[0], pair[1]);
    }

    // Send data to server (you'll need to implement this part)
    saveVolunteerData(formData);
});

function saveVolunteerData(data) {
    // Send data to Django backend to save into the database
    // You'll need to use AJAX, Fetch API, or any other method to send data to your Django backend
    // Example using Fetch API
    fetch('/save-volunteer-data/', {
        method: 'POST',
        body: data
    })
    .then(response => {
        if (response.ok) {
            alert("Data saved successfully!");
            // You can redirect or perform any other action upon successful save
        } else {
            console.error('Failed to save data');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}