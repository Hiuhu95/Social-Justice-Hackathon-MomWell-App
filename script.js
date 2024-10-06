document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("supportForm");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const summaryDiv = document.getElementById("formSummary");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate form data
        if (!validateForm()) return;

        // Capture form data
        const formData = {
            name: form.name.value || "Anonymous",
            email: form.email.value,
            experience: form.experience.value,
            preferredContact: form.preferredContact.value,
            termsAccepted: form.terms.checked,
        };

        // Display summary
        displaySummary(formData);

        // Confirmation message
        alert("Thank you for sharing your experience!");
    });

    // Real-time validation for email
    emailInput.addEventListener("input", function() {
        validateEmail();
    });

    // Validate the entire form
    function validateForm() {
        const emailIsValid = validateEmail();
        const termsAccepted = form.terms.checked;

        if (!termsAccepted) {
            alert("You must accept the terms and conditions.");
            return false;
        }

        return emailIsValid;
    }

    // Validate email format
    function validateEmail() {
        const emailValue = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue && !emailPattern.test(emailValue)) {
            emailError.textContent = "Please enter a valid email address.";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
    }

    // Display captured data
    function displaySummary(data) {
        summaryDiv.innerHTML = `
            <h3>Your Experience:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Your Experience:</strong> ${data.experience}</p>
            <p><strong>Preferred Contact Method:</strong> ${data.preferredContact}</p>
            <p><strong>Terms Accepted:</strong> ${data.termsAccepted ? "Yes" : "No"}</p>
        `;
    }

    // Real-time updates for form summary
    form.addEventListener("input", () => {
        const formData = {
            name: form.name.value || "Anonymous",
            email: form.email.value,
            experience: form.experience.value,
            preferredContact: form.preferredContact.value,
            termsAccepted: form.terms.checked,
        };
        displaySummary(formData);
    });
});
