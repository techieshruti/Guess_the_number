document.addEventListener("DOMContentLoaded", () => {
   // Selecting Elements from the DOM
    const startScreen = document.getElementById("start-screen");
    const startGame = document.getElementById("start_game");
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
function startGame() { 
    secretNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number
    attempts = 0; // Reset attempts
    feedback.textContent = ""; // Clear feedback message
    attempts.textContent = ""; // Clear previous attempt count
    inputGuess.value = ""; // Clear input field
    playAgain.classList.add("hidden"); // Hide the "Play Again" button
} 

// Handling Click on "Start Game" Button
startGame.addEventListener("click", () => { // Event listener for "Start Game" starts
    startScreen.classList.add("hidden"); // Hide the welcome screen
    gameScreen.classList.remove("hidden"); // Show the game screen
    startGame();
});

// Handling Click on "Check Guess" Button
    checkGuess.addEventListener("click", () => { // (4) Event listener for "Check Guess" starts
    let guess = parseInt(userGuessInput.value); // Get user input as an integer
    attempts++; // Increment attempts counter

    // A️- Validate Input
    if (isNaN(guess) || guess < 1 || guess > 100) { // If input is invalid
        feedback.textContent = "⚠️ Please enter a number between 1 and 100!";
        return; // Stop execution
    }

    // B️- Check Guess

    if(guess == "quit")
    {
        feedback.textContent = "User Quit!";
    }

    if(guess == secretNumber)
        {
            feedback.textContent = `🎉 Correct! You guessed it right! Random number is ${guess}`;
        }
    else if(guess > secretNumber)
        {
            feedback.textContent = "⬇️ Too high! Try a smaller number.";
        }
    else
        {
            feedback.textContent = "⬆️ Too low! Try a bigger number.";
        }
    
    // Update Attempts Display    
    attemptsText.textContent = `Attempts: ${attempts}`;
    }); 

    // Handling Click on "Play Again" Button
    playAgain.addEventListener("click", startGame);   

});