document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        if (username.trim() === "") {
            alert("Please enter a username.");
        } else {
            // Redirect to the game page with the username as a URL parameter
            window.location.href = `rps-game.html?username=${encodeURIComponent(username)}`;
        }
    });
});
