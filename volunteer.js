document.addEventListener("DOMContentLoaded", function() {
    // Dummy data for demonstration
    const tasksData = ["Task 1", "Task 2", "Task 3"];
    const achievementsData = ["Achievement 1", "Achievement 2", "Achievement 3"];
    const volunteerDetailsData = {
      name: "John Doe",
      age: 25,
      email: "john@example.com",
      phone: "123-456-7890"
    };
  
    // Function to populate tasks
    function populateTasks() {
      const tasksList = document.getElementById("tasks");
      tasksData.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        tasksList.appendChild(li);
      });
    }
  
    // Function to populate achievements
    function populateAchievements() {
      const achievementsList = document.getElementById("achievements");
      achievementsData.forEach(achievement => {
        const li = document.createElement("li");
        li.textContent = achievement;
        achievementsList.appendChild(li);
      });
    }
  
    // Function to populate volunteer details
    function populateVolunteerDetails() {
      const volunteerDetailsDiv = document.getElementById("volunteer-details");
      const details = volunteerDetailsData;
      volunteerDetailsDiv.innerHTML = `
        <p><strong>Name:</strong> ${details.name}</p>
        <p><strong>Age:</strong> ${details.age}</p>
        <p><strong>Email:</strong> ${details.email}</p>
        <p><strong>Phone:</strong> ${details.phone}</p>
      `;
    }
  
    // Call functions to populate data
    populateTasks();
    populateAchievements();
    populateVolunteerDetails();
  
    // Event listener for certificate button
    const certificateBtn = document.getElementById("certificate-btn");
    certificateBtn.addEventListener("click", () => {
      // Redirect to certificate page
      window.location.href = "certificate.html";
    });
});