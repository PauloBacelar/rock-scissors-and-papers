// Functions
function startGame(chosenImg) {
  // Player won't run game again after click an image
  gameIsrunning = true;

  // Change image styles
  for (let key of Object.keys(images)) {
    for (let j in images[key]) {
      // Make cursor default
      images[key][j].style.cursor = "default";

      // Not chosen images won't get dark on hover
      images[key][j].addEventListener("mouseenter", () => {
        if (images[key][j] != chosenImg) {
          images[key][j].style.filter = "brightness(100%)";
        }
      });
    }
  }

  chosenImg.style.filter = "brightness(75%)";
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
  let winner;

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
  resultTxt.textContent = result;
}

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
    }
  });
});
