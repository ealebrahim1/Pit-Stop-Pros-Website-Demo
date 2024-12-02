// Save profile information to localStorage
function saveProfile(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const vehicle = document.getElementById("vehicle").value;

    // Create a profile object
    const profile = { name, email, phone, vehicle };

    // Save the profile to localStorage
    localStorage.setItem("profile", JSON.stringify(profile));

    // Show success message
    const profileMessage = document.getElementById("profile-message");
    profileMessage.style.display = "block";

    // Hide the message after 3 seconds
    setTimeout(() => {
        profileMessage.style.display = "none";
    }, 3000);

    // Update the displayed profile
    displayProfile();
}

// Display profile information from localStorage
function displayProfile() {
    const profile = JSON.parse(localStorage.getItem("profile"));

    if (profile) {
        document.getElementById("display-name").querySelector("span").textContent = profile.name;
        document.getElementById("display-email").querySelector("span").textContent = profile.email;
        document.getElementById("display-phone").querySelector("span").textContent = profile.phone;
        document.getElementById("display-vehicle").querySelector("span").textContent = profile.vehicle;
    }
}

// Load profile information when the page loads
window.onload = function () {
    displayProfile();
    const profileForm = document.getElementById("profile-form");
    profileForm.addEventListener("submit", saveProfile);
};
