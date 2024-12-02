// Function to save appointment to localStorage
function saveAppointment(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form values
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const vehicleYear = document.getElementById("vehicle-year").value;
    const vehicleMake = document.getElementById("vehicle-make").value;
    const vehicleModel = document.getElementById("vehicle-model").value;

    // Validate form inputs
    if (!service || !date || !time || !vehicleYear || !vehicleMake || !vehicleModel) {
        alert("Please fill out all fields.");
        return;
    }

    // Get existing appointments from localStorage or initialize an empty array
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    // Create a new appointment object
    const newAppointment = {
        service,
        date,
        time,
        vehicleYear,
        vehicleMake,
        vehicleModel
    };

    // Add the new appointment to the array
    appointments.push(newAppointment);

    // Save the updated array back to localStorage
    localStorage.setItem("appointments", JSON.stringify(appointments));

    // Show confirmation message
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";

    // Clear the form after saving
    document.getElementById("appointment-form").reset();

    // Hide the confirmation message after 3 seconds
    setTimeout(() => {
        confirmationMessage.style.display = "none";
    }, 3000);
}

// Attach event listener to the form
document.getElementById("appointment-form").addEventListener("submit", saveAppointment);
