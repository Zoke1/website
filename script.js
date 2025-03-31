document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-button");
    const sections = document.querySelectorAll(".content-section");

    function showSection(sectionId) {
        sections.forEach(section => section.classList.remove("active"));
        document.getElementById(sectionId).classList.add("active");

        // Highlight the active button
        navButtons.forEach(button => button.classList.remove("active-button"));
        document.querySelector(`[data-target="${sectionId}"]`).classList.add("active-button");
    }

    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            showSection(targetId);
        });
    });

    showSection("home"); // Default to Home section
});
