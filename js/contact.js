document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("messageForm");
    const messageInput = document.getElementById("message");
    const charCount = document.getElementById("charCount");
    const successMessage = document.getElementById("contactSuccess");

    if (!contactForm || !messageInput || !charCount || !successMessage) {
        console.error("Some contact page elements could not be found.");
        return;
    }

    function updateCharacterCount() {
        const currentLength = messageInput.value.length;
        const maxLength = messageInput.maxLength;

        charCount.textContent = `${currentLength} / ${maxLength}`;
    }

    function showSuccessMessage() {
        successMessage.classList.add("show");

        setTimeout(() => {
            successMessage.classList.remove("show");
        }, 3000);
    }

    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.classList.add("was-validated");
            return;
        }

        const formData = {
            fullName: document.getElementById("fullName").value.trim(),
            email: document.getElementById("email").value.trim(),
            subject: document.getElementById("subject").value,
            branch: document.getElementById("branch").value,
            message: messageInput.value.trim()
        };

        console.log("Contact form submitted:", formData);

        showSuccessMessage();

        contactForm.reset();
        contactForm.classList.remove("was-validated");

        updateCharacterCount();
    });

    contactForm.addEventListener("reset", () => {
        contactForm.classList.remove("was-validated");

        setTimeout(() => {
            updateCharacterCount();
        }, 0);
    });

    messageInput.addEventListener("input", updateCharacterCount);

    updateCharacterCount();
});