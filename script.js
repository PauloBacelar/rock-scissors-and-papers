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

function chose(imgID) {
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

// Event Listeners
playerImages.forEach((img) => {
  img.addEventListener("click", () => {
    if (!gameIsrunning) {
      chose(img.id);
      startGame(img);
    }
  });
});
