console.log('Script loaded'); // Check if the script is loaded

function toggleMenu() {
  console.log('Menu toggled'); // Debug when menu is clicked

  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}
