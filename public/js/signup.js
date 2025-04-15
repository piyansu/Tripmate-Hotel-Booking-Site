function showTab(tabId, event) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show the selected tab content
  document.getElementById(tabId).classList.add("active");

  // Add active class to the clicked button
  event.target.classList.add("active");
}

function validatePassword() {
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("signup-confirm").value;
  const errorElement = document.getElementById("password-error");

  if (password !== confirmPassword) {
    errorElement.textContent = "Passwords do not match";
    return false; // Prevent form submission
  } else {
    errorElement.textContent = "";
    return true; // Allow form submission
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const tabParam = urlParams.get("tab");

  if (tabParam === "login") {
    const loginTabBtn = document.querySelector(".tab-btn:nth-child(2)");
    showTab("login", { target: loginTabBtn });
  } else {
    // Default to Sign Up tab
    const signupTabBtn = document.querySelector(".tab-btn:nth-child(1)");
    showTab("signup", { target: signupTabBtn });
  }
});

