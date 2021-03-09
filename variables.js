// Images
const playerImages = [
  document.querySelector("img#rock-player"),
  document.querySelector("img#scissors-player"),
  document.querySelector("img#papers-player"),
];
const machineImages = [
  document.querySelector("img#rock-machine"),
  document.querySelector("img#scissors-machine"),
  document.querySelector("img#papers-machine"),
];
const images = {
  rock: [playerImages[0], machineImages[0]],
  scissors: [playerImages[1], machineImages[1]],
  papers: [playerImages[2], machineImages[2]],
};

// Text
const playerChoiceTxt = document.querySelector("h3#player-chose");

// Game functions
let playerChoice;
let gameIsrunning = false;
const choiceOptions = ["rock", "scissors", "papers"];
