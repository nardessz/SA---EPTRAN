document.addEventListener("DOMContentLoaded", function() {
    const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.getElementById("passwordInput");

    togglePassword.addEventListener("click", function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.querySelector("i").classList.remove("fa-eye-slash");
            togglePassword.querySelector("i").classList.add("fa-eye");
        } else {
            passwordInput.type = "password";
            togglePassword.querySelector("i").classList.remove("fa-eye");
            togglePassword.querySelector("i").classList.add("fa-eye-slash");
        }
    });
});