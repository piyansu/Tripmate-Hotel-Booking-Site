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

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const nextBtn = document.getElementById("next-featured");
  const prevBtn = document.getElementById("prev-featured");

  // Check if elements exist to prevent errors
  if (!carousel || !nextBtn || !prevBtn) return;

  const scrollAmount = 320; // Width of card + margins

  // Enhanced smooth scrolling with easing function
  function smoothScroll(element, target, duration) {
    const start = element.scrollLeft;
    const change = target - start;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function: easeOutCubic for natural deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      element.scrollLeft = start + change * easeProgress;

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  // Improved button event listeners with enhanced smooth scrolling
  nextBtn.addEventListener("click", () => {
    const target = carousel.scrollLeft + scrollAmount;
    smoothScroll(carousel, target, 600); // 600ms for smooth transition
  });

  prevBtn.addEventListener("click", () => {
    const target = carousel.scrollLeft - scrollAmount;
    smoothScroll(carousel, target, 600);
  });

  // Show/hide navigation buttons based on scroll position
  function updateButtonVisibility() {
    const isAtStart = carousel.scrollLeft === 0;
    const isAtEnd =
      carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 5;

    // Change opacity based on scroll position
    prevBtn.style.opacity = isAtStart ? "0.5" : "1";
    nextBtn.style.opacity = isAtEnd ? "0.5" : "1";

    // Optional: disable buttons at edges for better UX
    prevBtn.disabled = isAtStart;
    nextBtn.disabled = isAtEnd;
  }

  carousel.addEventListener("scroll", updateButtonVisibility);

  // Initialize button state
  updateButtonVisibility();

  // Improved touch interaction with momentum scrolling
  let startX;
  let startTime;
  let startScrollLeft;
  let lastDragX;
  let velocity = 0;
  let isDragging = false;
  let animationId = null;

  carousel.addEventListener("touchstart", (e) => {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    startX = e.touches[0].pageX;
    startTime = Date.now();
    startScrollLeft = carousel.scrollLeft;
    lastDragX = startX;
    isDragging = true;
  });

  carousel.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const x = e.touches[0].pageX;
    const dx = startX - x;
    const timestamp = Date.now();

    // Calculate instantaneous velocity
    velocity = ((lastDragX - x) / (timestamp - startTime)) * 1000; // pixels per second

    lastDragX = x;
    startTime = timestamp;

    carousel.scrollLeft = startScrollLeft + dx;
    e.preventDefault();
  });

  carousel.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;

    // Apply momentum based on final velocity
    const amplifier = 0.8; // Adjust for more/less momentum
    const speed = Math.abs(velocity) * amplifier;
    const distance = velocity * 0.5; // How far it will travel with momentum

    if (Math.abs(speed) > 5) {
      const targetScroll = carousel.scrollLeft + distance;
      smoothScroll(carousel, targetScroll, 500);
    }
  });

  // Improved mouse drag with momentum scrolling
  carousel.addEventListener("mousedown", (e) => {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    e.preventDefault();
    startX = e.pageX;
    startTime = Date.now();
    startScrollLeft = carousel.scrollLeft;
    lastDragX = startX;
    isDragging = true;
    carousel.style.cursor = "grabbing";

    // Prevent text selection during drag
    document.body.style.userSelect = "none";
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    e.preventDefault();
    const x = e.pageX;
    const dx = startX - x;
    const timestamp = Date.now();

    // Calculate instantaneous velocity
    velocity = ((lastDragX - x) / (timestamp - startTime)) * 1000;

    lastDragX = x;
    startTime = timestamp;

    carousel.scrollLeft = startScrollLeft + dx;
  });

  function finishDrag() {
    if (!isDragging) return;
    isDragging = false;

    carousel.style.cursor = "grab";
    document.body.style.userSelect = "";

    // Apply momentum based on final velocity
    const amplifier = 0.8;
    const speed = Math.abs(velocity) * amplifier;
    const distance = velocity * 0.5;

    if (Math.abs(speed) > 5) {
      const targetScroll = carousel.scrollLeft + distance;
      smoothScroll(carousel, targetScroll, 500);
    }
  }

  carousel.addEventListener("mouseup", finishDrag);
  carousel.addEventListener("mouseleave", finishDrag);

  // Smoother keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (document.activeElement !== document.body) return;

    if (e.key === "ArrowLeft") {
      const target = carousel.scrollLeft - scrollAmount;
      smoothScroll(carousel, target, 600);
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      const target = carousel.scrollLeft + scrollAmount;
      smoothScroll(carousel, target, 600);
      e.preventDefault();
    }
  });

  // Add scroll snapping for better positioning
  carousel.addEventListener("scrollend", () => {
    // Find the closest card position to snap to
    const cardWidth = 320; // Card width + gap
    const position = carousel.scrollLeft;
    const mod = position % cardWidth;

    let target;
    if (mod > cardWidth / 2) {
      target = position + (cardWidth - mod);
    } else {
      target = position - mod;
    }

    // Only snap if we're close to a snap point
    if (Math.abs(position - target) < 40) {
      smoothScroll(carousel, target, 300);
    }
  });

  // Initialize cursor style
  carousel.style.cursor = "grab";
});

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
