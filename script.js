// Toggle dropdown menu visibility
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active'); // Toggle the active class
}

// Close dropdown when a link is clicked
function closeMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.remove('active'); // Remove the active class
}

// Add event listeners to links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#nav-links a'); // Select all links
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu); // Close menu when clicked
  });
});
