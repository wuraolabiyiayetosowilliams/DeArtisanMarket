document.addEventListener("DOMContentLoaded", function() {
    // Handle button clicks
    const signInBtn = document.querySelector(".primary-button a");
    const signUpBtn = document.querySelector(".secondary-button a");

    signInBtn.addEventListener("click", function() {
        window.location.href = "signin.html"; // Redirect to sign-in page
    });

    signUpBtn.addEventListener("click", function() {
        window.location.href = "signup.html"; // Redirect to sign-up page
    });
});
