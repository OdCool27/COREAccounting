window.onload = function() {
    const tips = [
        "'Keep personal and business finances separate to maintain clear and accurate records.'",
        "'Record every expense and store receipts to simplify tracking and tax filing.'",
        "'Reconcile bank statements regularly to catch errors early.'",
        "'Set aside money for taxes and understand deductible expenses.'",
        "'Monitor cash flow closely to ensure your business stays financially stable.'"
    ];

    let index = 0;
    const tipElement = document.getElementById("tip-text");

    // Show first tip immediately
    tipElement.textContent = tips[index];
    index = (index + 1) % tips.length;

    setInterval(() => {
        // Fade out first
        tipElement.style.opacity = 0;

        // Wait for the fade-out to complete
        setTimeout(() => {
            // Update text
            tipElement.textContent = tips[index];
            index = (index + 1) % tips.length;

            // Fade back in
            tipElement.style.opacity = 1;
        }, 1000); // must match CSS transition duration
    }, 7000);
};


//--------------------------LINE ADJUSTMENT CODE-------------------------------------------
const lines = document.querySelectorAll('.line');

function updateLineLength() {
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;

    lines.forEach(line => {
        const rect = line.getBoundingClientRect();

        // Distance from top of line to center of viewport
        let distance = rect.top - viewportCenter;

        // Map distance to 0–1 progress
        const maxDistance = viewportHeight / 2;
        let progress = 1 - Math.abs(distance) / maxDistance;

        // Clamp between 0 and 1
        progress = Math.min(Math.max(progress, 0), 1);

        // **Optional: don't let the line shrink once fully grown**
        const currentWidth = parseFloat(line.style.width) || 0;
        const maxWidth = line.parentElement.offsetWidth * 1.2;

        // Only grow, never shrink
        const newWidth = Math.max(currentWidth, progress * maxWidth);
        line.style.width = `${newWidth}px`;
    });
}

window.addEventListener('scroll', updateLineLength);
window.addEventListener('resize', updateLineLength);
window.addEventListener('load', updateLineLength);


//--------------------------------HAMBURGER------------------------------------
// Hamburger
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.dropdown');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

//--------------------------------COPYRIGHT YEAR----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

//-------------------------------CALENDLY-----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const overlay = document.getElementById("calendlyOverlay");
    const closeBtn = document.getElementById("closeCalendly");

    // Open Calendly modal when "Book Consult" is clicked
    document.querySelectorAll(".book-consult").forEach(button => {
        button.addEventListener("click", () => {
            overlay.style.display = "flex";
            document.body.style.overflow = "hidden"; // Prevent scrolling in background
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Close when clicking outside modal
    overlay.addEventListener("click", e => {
        if (e.target === overlay) {
            overlay.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

});