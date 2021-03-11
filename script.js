// Functions
function startGame(chosenImg) {
  // Reset variables
  gameIsrunning = true;
  chosenImg.classList.add("chosen-image");
  winner = "";
}

function playerChose(imgID) {
  // Getting what the user chose
  if (imgID === "scissors-player") {
    playerChoice = "scissors";
    playerChoiceTxt.textContent = "Player chose scissors";
  } else if (imgID === "papers-player") {
    playerChoice = "papers";
    playerChoiceTxt.textContent = "Player chose papers";
  } else if (imgID === "rock-player") {
    playerChoice = "rock";
    playerChoiceTxt.textContent = "Player chose rock";
  }
}

function machineChose(choice) {
  // Choosing for machine
  if (choice == "rock") {
    machineChoiceTxt.textContent = "Machine chose rock";
  } else if (choice == "scissors") {
    machineChoiceTxt.textContent = "Machine chose scissors";
  } else {
    machineChoiceTxt.textContent = "Machine chose papers";
  }
}

function machineChoices() {
  // Get random element from choiceOptions[] array
  let randomIndex = Math.floor(Math.random() * 3);
  machineChoice = choiceOptions[randomIndex];

  // Show text of the choice
  machineChose(machineChoice);

  // Darken chosen image
  machineImages[randomIndex].style.filter = "brightness(75%)";
}

function checkWinner(playerChoice, machineChoice) {
  // Check who won
  if (playerChoice == "rock") {
    // Player chose rock
    if (machineChoice == "rock") {
      displayResult(`${playerChoice} draws with ${machineChoice}`);
    } else if (machineChoice == "paper") {
      winner = "machine";
      displayResult(`${machineChoice} beats ${playerChoice}, ${winner} wins`);
    } else {
      winner = "player";
      displayResult(`${playerChoice} beats ${machineChoice}, ${winner} wins`);
    }
  } else if (playerChoice == "scissors") {
    // Player chose scissors
    if (machineChoice == "scissors") {
      displayResult(`${playerChoice} draws with ${machineChoice}`);
    } else if (machineChoice == "rock") {
      winner = "machine";
      displayResult(`${machineChoice} beats ${playerChoice}, ${winner} wins`);
    } else {
      winner = "player";
      displayResult(`${playerChoice} beats ${machineChoice}, ${winner} wins`);
    }
  } else if (playerChoice == "papers") {
    if (machineChoice == "papers") {
      displayResult(`${playerChoice} draws with ${machineChoice}`);
    } else if (machineChoice == "scissors") {
      winner = "machine";
      displayResult(`${machineChoice} beats ${playerChoice}, ${winner} wins`);
    } else {
      winner = "player";
      displayResult(`${playerChoice} beats ${machineChoice}, ${winner} wins`);
    }
  }
}

function displayResult(result) {
  // Show result
  resultDiv.classList.remove("hide");
  resultTxt.textContent = result;
}

function showButton() {
  // Show button for play again
  playAgainButton.classList.remove("hide");
}

function changePoints(winner) {
  // Change points if there is a winner
  if (winner === "player") {
    playerPoints++;
    playerPointsTxt.textContent = `You: ${playerPoints}`;
  } else if (winner === "machine") {
    machinePoints++;
    machinePointsTxt.textContent = `Machine: ${machinePoints}`;
  }
}

playAgainButton.addEventListener("click", () => {
  // Player will have to click an image again
  gameIsrunning = false;

  // Increase image brightness and make cursor pointer
  for (let k of Object.keys(images)) {
    for (let i in images[k]) {
      images[k][i].style.cursor = "pointer";
      images[k][i].style.filter = "brightness(100%)";
    }
  }

  // Hide button and result
  playAgainButton.classList.add("hide");
  resultDiv.classList.add("hide");
});

// Main function
playerImages.forEach((img) => {
  img.addEventListener("click", () => {
    if (!gameIsrunning) {
      // Choices and start game
      playerChose(img.id);
      startGame(img);
      machineChoices();

      // Check and display result
      checkWinner(playerChoice, machineChoice);

      // Game is not running anymore
      changePoints(winner);
      showButton();
    }
  });
});
