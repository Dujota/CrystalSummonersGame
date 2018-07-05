// Wait for the DOM to load
$(document).ready(function() {
  randomNumGenerator = () => {
    return Math.floor(Math.random() * 102) + 19;
  };

  //Game Variales
  let CurrentGuess = 0;
  let NumToMatch = randomNumGenerator();

  // UI Variables
  let wins = 0;
  let losses = 0;
  let crystals;

  // Generate our initial crystals to play with
  generateCrystals = () => {
    return {
      red: {
        randomValue: Math.floor(Math.random() * 12) + 1,
        imageUrl: 'assets/images/red.png'
      },
      blue: {
        randomValue: Math.floor(Math.random() * 12) + 1,
        imageUrl: 'assets/images/blue.png'
      },
      yellow: {
        randomValue: Math.floor(Math.random() * 12) + 1,
        imageUrl: 'assets/images/yellow.png'
      },
      green: {
        randomValue: Math.floor(Math.random() * 12) + 1,
        imageUrl: 'assets/images/green.png'
      }
    };
  };

  initializeGame = () => {
    //reset the game, set the score to 0, generate new crystals and show a new random number to match
    NumToMatch = 0;
    crystals = generateCrystals();
    randomNum = randomNumGenerator();
    $('#randomNum').text(randomNum);
  };

  // check game status
  updateGame = didUserWin => {
    $('#wins').empty();
    $('#losses').empty();
    $('#message').empty();

    //check for a win/loss
    if (didUserWin === true) {
      wins++;
      $('#wins').text = wins;
      $('#message').text = `You Win! Yay!`;
      initializeGame();
    } else {
      losses++;
      $('#losses').text = losses;
      $('#message').text = `You Lose :(`;
      initializeGame();
    }
  };
  initializeGame();
});
