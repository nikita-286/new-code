document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      resetErrorMessages();
  
      let isValid = true;
  
      const fullName = form.elements["fullname"].value.trim();
      const email = form.elements["email"].value.trim();
      const phone = form.elements["phone"].value.trim();
      const dob = form.elements["dob"].value.trim();
      const address = form.elements["address"].value.trim();
  
      if (!fullName) {
        isValid = false;
        showError("fullnameError", "Please enter your full name");
      }
  
      if (!email || !isValidEmail(email)) {
        isValid = false;
        showError("emailError", "Please enter a valid email address");
      }
  
      if (!phone || !isValidPhone(phone)) {
        isValid = false;
        showError("phoneError", "Please enter a valid phone number");
      }
  
      if (!dob) {
        isValid = false;
        showError("dobError", "Please enter your date of birth");
      }
  
      if (!address) {
        isValid = false;
        showError("addressError", "Please enter your address");
      }
  
      if (isValid) {
        form.submit();
      }
    });
  
    function showError(id, message) {
      const errorMessage = document.getElementById(id);
      errorMessage.textContent = message;
      errorMessage.style.display = "block";
    }
  
    function resetErrorMessages() {
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach(function(errorMessage) {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
      });
    }
  
    function isValidEmail(email) {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }
  
    function isValidPhone(phone) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
    }
  });