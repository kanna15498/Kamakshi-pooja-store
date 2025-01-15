document.addEventListener("DOMContentLoaded", () => {
    const quoteIcon = document.getElementById("quoteIcon");
    const quoteModal = document.getElementById("quoteModal");
    const closeModal = document.getElementById("closeModal");
    const quoteForm = document.getElementById("quoteForm");

    // Show the modal when "Quote Now" is clicked
    quoteIcon.addEventListener("click", () => {
        quoteModal.style.display = "flex";
    });

    // Hide the modal when the close button is clicked
    closeModal.addEventListener("click", () => {
        quoteModal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === quoteModal) {
            quoteModal.style.display = "none";
        }
    });

    // Handle form submission
    quoteForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Gather form data
        const name = document.getElementById("name").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const budget = document.getElementById("budget").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate inputs
        if (!name || !contact || !budget) {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Thank you for your interest! We will get back to you soon.");
        quoteModal.style.display = "none";
        quoteForm.reset();
    });
});
