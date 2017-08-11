
document.addEventListener("submit", function(event) {
    if (document.getElementById("fname").value === "" || document.getElementById("lname").value === "" || document.getElementById("email").value === "" || document.getElementById("phone").value === "") {
        alert('Please fill out your first name, last name, phone number, and email address to submit.');
        event.preventDefault();
    }
});