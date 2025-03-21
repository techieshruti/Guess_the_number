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