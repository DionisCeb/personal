import App from "./classes/App.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
});


// Smooth scrolling for elements with the 'smooth-scroll' class
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default jump
  
      const targetId = this.getAttribute('href').substring(1); // Extract the ID without '#'
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        // Smoothly scroll to the section
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
  