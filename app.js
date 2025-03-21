document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("start-screen");
    const startGame = document.getElementById("start_game");
    const gameScreen = document.getElementById("game-screen");
    const videoContainer = document.getElementById("video-container");
    const inputGuess = document.getElementById("input_guess");
    const feedback = document.getElementById("feedback");
    const attempts = document.getElementById("attempts");
    const playAgain = document.getElementById("play-again");
}) 
//This event listener ensures that the script runs only after the entire HTML document has been loaded

let secretNumber;

function startGame(guess)
{
    secretNumber = Math.floor(Math.random()*100 + 1);

    if(guess == "quit")
    {
        console.log("User Quit!");
    }

    if(guess == secretNumber)
    {
        console.log(`🎉 Correct! You guessed it right! Random number is ${guess}`);
    }
    else if(guess > secretNumber)
        {
            console.log("⬇️ Too high! Try a smaller number.");
        }
        else{
            console.log("⬆️ Too low! Try a bigger number.");
        }
}