document.addEventListener("DOMContentLoaded", function () {
    // Get the username from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");

    if (username) {
        // Display the username on the page
        const usernameDisplay = document.getElementById("usernameDisplay");
        usernameDisplay.textContent = username;
    } else {
        // Redirect back to the login page if no username is found
        window.location.href = "login.html";
    }
});

// Define variables to keep track of scores
let userScore = 0;
let botScore = 0;
let draws = 0;

// Function to generate a random choice for the bot
function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to handle user choice selection
function selectChoice(userChoice) {
    displayUserChoice(userChoice);
}

// Function to display the user's choice
function displayUserChoice(choice) {
    const userChoiceImage = document.getElementById("userChoiceImage");
    userChoiceImage.src = choice + ".png"; // Replace with your image file paths
    userChoiceImage.alt = choice; // Set the alt attribute to the choice
}

// Function to display the bot's choice
function displayBotChoice(choice) {
    const botChoiceImage = document.getElementById("botChoiceImage");
    botChoiceImage.src = choice + ".png"; // Replace with your image file paths
    botChoiceImage.alt = "Bot's Choice";
}

// Function to determine the winner and update scores
function determineWinner(userChoice, botChoice) {
    const result = document.getElementById("result");
    if (userChoice === botChoice) {
        result.textContent = "Draw!";
        draws++;
    } else if (
        (userChoice === "rock" && botChoice === "scissors") ||
        (userChoice === "paper" && botChoice === "rock") ||
        (userChoice === "scissors" && botChoice === "paper")
    ) {
        result.textContent = "You Win!";
        userScore++;
    } else {
        result.textContent = "Bot Wins!";
        botScore++;
    }

    // Update scores on the page
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("botScore").textContent = botScore;
    document.getElementById("draws").textContent = draws;
}

// Function to handle user choice selection
function selectChoice(userChoice) {
    displayUserChoice(userChoice);
}

// Function to play the game
function play() {
    const userChoice = document.getElementById("userChoiceImage").alt.toLowerCase();
    const botChoice = getRandomChoice();
    displayBotChoice(botChoice);
    determineWinner(userChoice, botChoice);
}

// Function to reset the game
function resetGame() {
    // Reset scores and results
    userScore = 0;
    botScore = 0;
    draws = 0;
    
    // Clear choice images and result text
    document.getElementById("userChoiceImage").src = "";
    document.getElementById("userChoiceImage").alt = "";
    document.getElementById("botChoiceImage").src = "";
    document.getElementById("botChoiceImage").alt = "";
    document.getElementById("result").textContent = "";
    
    // Update score displays
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("botScore").textContent = botScore;
    document.getElementById("draws").textContent = draws;
}