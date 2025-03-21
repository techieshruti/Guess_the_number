document.addEventListener("DOMContentLoaded", () => {
   // Selecting Elements from the DOM
   const startScreen = document.getElementById("start-screen");
   const startButton = document.getElementById("start_game"); // Renamed variable
   const gameScreen = document.getElementById("game-screen");
   const videoContainer = document.getElementById("video-container");
   const inputGuess = document.getElementById("input_guess");
   const checkGuess = document.getElementById("check-guess");
   const feedback = document.getElementById("feedback");
   const attemptsText = document.getElementById("attempts");
   const playAgain = document.getElementById("play-again");
   
 
// Declaring Variables (used throughout the game)
let secretNumber, attempts;

//  Function to Start or Restart the Game
function initializeGame() { 
    secretNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number
    attempts = 0; // Reset attempts
    feedback.textContent = ""; // Clear feedback message
    attempts.textContent = ""; // Clear previous attempt count
    inputGuess.value = ""; // Clear input field
    playAgain.classList.add("hidden"); // Hide the "Play Again" button
} 

// Handling Click on "Start Game" Button
startButton.addEventListener("click", () => { // Event listener for "Start Game" starts
    startScreen.classList.add("hidden"); // Hide the welcome screen
    gameScreen.classList.remove("hidden"); // Show the game screen
    initializeGame();
});

// Handling Click on "Check Guess" Button
    checkGuess.addEventListener("click", () => { // Event listener for "Check Guess" starts
    
        let guessValue = inputGuess.value.trim(); // Get value as a string first

        if (guessValue.toLowerCase() === "quit") { // Convert to lowercase for flexibility
            feedback.textContent = "User Quit!";
            return;
        }

        let guess = parseInt(guessValue); // Get user input as an integer
    attempts++; // Increment attempts counter

    // A️- Validate Input
    if (isNaN(guess) || guess < 1 || guess > 100) { // If input is invalid
        feedback.textContent = "⚠️ Please enter a number between 1 and 100!";
        return; // Stop execution
    }

    // B️- Check Guess

    if (guess === secretNumber) {
        feedback.textContent = `🎉 You found the number! The jungle celebrates your victory! Random number is ${guess}`;
        playAgain.classList.remove("hidden"); // Show play again button
    } else if (guess > secretNumber) {
        feedback.textContent = "🌴 Too high! The trees are whispering, try lower.";
    } else {
        feedback.textContent = "🐒 Too low! The monkeys say go higher.";
    }
    
    // Update Attempts Display    
    attemptsText.textContent = `Attempts: ${attempts}`;
    }); 

    // Handling Click on "Play Again" Button
    playAgain.addEventListener("click", initializeGame);

});