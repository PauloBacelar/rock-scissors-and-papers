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
const machineChoiceTxt = document.querySelector("h3#machine-chose");
const resultTxt = document.querySelector("h3#result-txt");

// Game functions
let playerChoice;
let machineChoice;
let gameIsrunning = false;
const choiceOptions = ["rock", "scissors", "papers"];
let winner;

// Points and results
const playAgainButton = document.querySelector("button#play-again-btn");
const resultDiv = document.querySelector("div#result-div");
let playerPoints = 0;
let machinePoints = 0;
const playerPointsTxt = document.querySelector("h3#player-points");
const machinePointsTxt = document.querySelector("h3#machine-points");
