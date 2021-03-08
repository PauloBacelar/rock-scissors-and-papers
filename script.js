// Functions
function startGame() {
  // Player won't run game again after click an image
  gameIsrunning = true;

  // Changing style of the images
  for (let key of Object.keys(images)) {
    for (let j in images[key]) {
      // Make cursor default
      images[key][j].style.cursor = "default";

      // Image won't get dark after click
      images[key][j].addEventListener("mouseenter", () => {
        images[key][j].style.filter = "brightness(100%)";
      });
    }
  }
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
      startGame();
    }
  });
});
