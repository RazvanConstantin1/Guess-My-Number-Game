"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // Game reset
  document.querySelector(".again").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = 20;
  });

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No Number !";

    //  When player Wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number !";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    //  When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game !";
      document.querySelector(".score").textContent = score;
    }

    //  When guess is too high
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game !";
      document.querySelector(".score").textContent = 0;
    }
  }
});
