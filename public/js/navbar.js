// Get elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

// On document ready
document.addEventListener('DOMContentLoaded', function() {
  // ACTIVE LINK HIGHLIGHTING
  // Get the current page path
  const currentPath = window.location.pathname;
  
  // Get all navigation links
  const navLinkElements = document.querySelectorAll('.nav-links a');
  
  // Loop through each link and check if it matches the current path
  navLinkElements.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Check if the current page path matches this link's href
    // Also handle the special case for home page
    if (
      (linkPath === '/' && (currentPath === '/' || currentPath === '/index.html')) ||
      (linkPath !== '/' && currentPath.startsWith(linkPath))
    ) {
      link.classList.add('active');
    }
  });
});

// MOBILE MENU TOGGLE
if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// DESKTOP DROPDOWN MENU
if (dropdownToggle) {
  dropdownToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling
    dropdownMenu.classList.toggle("show");
    dropdownToggle.classList.toggle("active"); // Add/remove active class for animation
  });

  document.addEventListener("click", (e) => {
    if (
      !dropdownMenu.contains(e.target) &&
      !dropdownToggle.contains(e.target)
    ) {
      dropdownMenu.classList.remove("show");
      dropdownToggle.classList.remove("active"); // Remove active class when closing
    }
  });
}

// CLOSE MOBILE MENU IF WINDOW RESIZED TO DESKTOP
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("open");
  }
});

// SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});