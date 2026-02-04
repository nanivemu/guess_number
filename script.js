let number;
let attempts;
let points = 0;

function startGame() {
  let diff = document.getElementById("difficulty").value;

  if (diff == 1) {
    number = Math.floor(Math.random() * 10);
    attempts = 5;
    points = 10;
  } else if (diff == 2) {
    number = Math.floor(Math.random() * 100);
    attempts = 7;
    points = 40;
  } else if (diff == 3) {
    number = Math.floor(Math.random() * 1000);
    attempts = 10;
    points = 60;
  } else {
    number = Math.floor(Math.random() * 10000);
    attempts = 12;
    points = 100;
  }

  document.getElementById("info").innerHTML =
    `Attempts: ${attempts} <br> Points: ${points}`;

  document.getElementById("result").innerHTML = "Game Started 🎮";
}

function checkGuess() {
  let guess = document.getElementById("guess").value;

  if (attempts <= 0) {
    document.getElementById("result").innerHTML =
      `❌ Game Over! Number was ${number}`;
    return;
  }

  attempts--;

  if (guess == number) {
    document.getElementById("result").innerHTML =
      `🎉 Correct! Points: ${points + 50}`;
  } else if (guess < number) {
    document.getElementById("result").innerHTML =
      "⬆ Too Low!";
  } else {
    document.getElementById("result").innerHTML =
      "⬇ Too High!";
  }

  document.getElementById("info").innerHTML =
    `Attempts: ${attempts} <br> Points: ${points}`;
}
