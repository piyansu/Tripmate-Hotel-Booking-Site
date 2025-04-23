// Get elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

// On document ready
document.addEventListener("DOMContentLoaded", function () {
  // ACTIVE LINK HIGHLIGHTING
  // Get the current page path
  const currentPath = window.location.pathname;

  // Get all navigation links
  const navLinkElements = document.querySelectorAll(".nav-links a");

  // Loop through each link and check if it matches the current path
  navLinkElements.forEach((link) => {
    const linkPath = link.getAttribute("href");

    // Check if the current page path matches this link's href
    // Also handle the special case for home page
    if (
      (linkPath === "/" &&
        (currentPath === "/" || currentPath === "/index.html")) ||
      (linkPath !== "/" && currentPath.startsWith(linkPath))
    ) {
      link.classList.add("active");
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

// IMPROVED CAROUSEL FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const nextBtn = document.getElementById("next-featured");
  const prevBtn = document.getElementById("prev-featured");

  // Check if elements exist to prevent errors
  if (!carousel || !nextBtn || !prevBtn) return;

  // Card width + margin (adjust based on your actual card dimensions)
  const cardWidth = 320;
  
  // Use CSS scroll behavior for smoother native scrolling
  carousel.style.scrollBehavior = "smooth";
  
  // Improved button event listeners with enhanced smooth scrolling
  nextBtn.addEventListener("click", () => {
    // Get the current scroll position and calculate the next card position
    const currentPosition = carousel.scrollLeft;
    const visibleWidth = carousel.clientWidth;
    const totalWidth = carousel.scrollWidth;
    
    // Find the next card position
    const nextPosition = Math.min(
      totalWidth - visibleWidth,
      Math.floor(currentPosition / cardWidth) * cardWidth + cardWidth
    );
    
    // Scroll to the position using native smooth scrolling
    carousel.scrollTo({
      left: nextPosition,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    // Get the current scroll position and calculate the previous card position
    const currentPosition = carousel.scrollLeft;
    
    // Find the previous card position
    const prevPosition = Math.max(
      0,
      Math.ceil(currentPosition / cardWidth - 1) * cardWidth
    );
    
    // Scroll to the position using native smooth scrolling
    carousel.scrollTo({
      left: prevPosition,
      behavior: "smooth"
    });
  });

  // Show/hide navigation buttons based on scroll position
  function updateButtonVisibility() {
    const isAtStart = carousel.scrollLeft < 10;
    const isAtEnd = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10;

    // Change opacity based on scroll position
    prevBtn.style.opacity = isAtStart ? "0.5" : "1";
    nextBtn.style.opacity = isAtEnd ? "0.5" : "1";
    
    // Make buttons non-interactive at edges
    prevBtn.style.pointerEvents = isAtStart ? "none" : "auto";
    nextBtn.style.pointerEvents = isAtEnd ? "none" : "auto";
  }

  carousel.addEventListener("scroll", updateButtonVisibility);
  window.addEventListener("resize", updateButtonVisibility);

  // Initialize button state
  updateButtonVisibility();

  // Improved touch/mouse dragging
  let startX, startScrollLeft;
  let isDragging = false;

  function startDrag(e) {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    startScrollLeft = carousel.scrollLeft;
    
    // Change cursor style
    carousel.style.cursor = "grabbing";
    carousel.style.scrollBehavior = "auto"; // Disable smooth scrolling during drag
    
    // Prevent text selection
    carousel.style.userSelect = "none";
  }

  function drag(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const walkX = (startX - x) * 1.2; // Multiplier for responsive feel
    
    carousel.scrollLeft = startScrollLeft + walkX;
  }

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    
    // Restore cursor and scrolling behavior
    carousel.style.cursor = "grab";
    carousel.style.userSelect = "";
    
    // Snap to nearest card after dragging
    const scrollPosition = carousel.scrollLeft;
    const cardPosition = Math.round(scrollPosition / cardWidth) * cardWidth;
    
    // Re-enable smooth scrolling for the snap
    carousel.style.scrollBehavior = "smooth";
    carousel.scrollTo({
      left: cardPosition,
      behavior: "smooth"
    });
  }

  // Mouse events
  carousel.addEventListener("mousedown", startDrag);
  carousel.addEventListener("mousemove", drag);
  carousel.addEventListener("mouseup", endDrag);
  carousel.addEventListener("mouseleave", endDrag);
  
  // Touch events
  carousel.addEventListener("touchstart", startDrag);
  carousel.addEventListener("touchmove", drag);
  carousel.addEventListener("touchend", endDrag);

  // Add keyboard support
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevBtn.click();
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      nextBtn.click();
      e.preventDefault();
    }
  });

  // Set initial cursor style
  carousel.style.cursor = "grab";
});

// DATE PICKER FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
  const checkInElement = document.getElementById("check-in");
  const checkOutElement = document.getElementById("check-out");

  const fp = flatpickr("#date-picker", {
    mode: "range",
    minDate: "today",
    dateFormat: "Y-m-d",
    disableMobile: "true",
    onOpen: function () {
      document.querySelector(".date-picker").style.boxShadow = "none";
    },
    onClose: function () {
      document.querySelector(".date-picker").style.boxShadow = "none";
    },

    onChange: function (selectedDates, dateStr) {
      if (selectedDates.length === 1) {
        const checkInDate = new Date(selectedDates[0]);
        const formattedDate = checkInDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        checkInElement.textContent = formattedDate;
        checkInElement.classList.add("active");
        checkOutElement.textContent = "Select check-out";
        checkOutElement.classList.remove("active");
      } else if (selectedDates.length === 2) {
        const checkInDate = new Date(selectedDates[0]);
        const checkOutDate = new Date(selectedDates[1]);

        const formattedCheckIn = checkInDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        const formattedCheckOut = checkOutDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });

        checkInElement.textContent = formattedCheckIn;
        checkOutElement.textContent = formattedCheckOut;
        checkOutElement.classList.add("active");
      }
    },
  });

  // Click on date display to open the picker
  document
    .getElementById("date-display")
    .addEventListener("click", function () {
      fp.open();
    });
});