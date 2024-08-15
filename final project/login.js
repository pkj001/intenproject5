document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const profileLink = document.getElementById("profileLink");
    const authLink = document.getElementById("authLink");
    
    let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (authLink) {
        if (isLoggedIn) {
            authLink.textContent = "Logout";
            profileLink.style.display = "inline";
        } else {
            authLink.textContent = "Login";
            profileLink.style.display = "none";
        }
    }
    
    loginForm.addEventListener("submit", event => {
        event.preventDefault();
        
        // For demo purposes, accept any username and password
        isLoggedIn = true;
        localStorage.setItem("isLoggedIn", "true");
        
        profileLink.style.display = "inline";
        authLink.textContent = "Logout";
        
        alert("Login successful!");
        
        // Redirect to the profile page after login
        window.location.href = "profile.html";
    });
    
    authLink.addEventListener("click", () => {
        if (isLoggedIn) {
            localStorage.removeItem("isLoggedIn");
            isLoggedIn = false;
            profileLink.style.display = "none";
            authLink.textContent = "Login";
            alert("Logged out successfully!");
        }
    });
});
