// main.js file for the auto upholsterer website

document.addEventListener('DOMContentLoaded', () => {
    // Initialize any interactive elements here
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            // Handle portfolio item click event
            const description = item.querySelector('.description');
            description.classList.toggle('visible');
        });
    });

    // Add any additional JavaScript functionality as needed
});