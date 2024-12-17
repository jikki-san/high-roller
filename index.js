die = document.querySelector("#die");
resultDisplay = document.querySelector(".roll-result");

handleDieRoll = () => {
  resultDisplay.style.display = "block";
  resultDisplay.textContent = "Thinking...";
  die.classList.add("roll-animation");

  setTimeout(() => {
    sideInput = document.querySelector("#numSides");
    numSides = sideInput.value;
    console.log(`Sides on die: ${numSides}`);
    result = Math.floor(Math.random() * numSides) + 1;
    die.classList.remove("roll-animation");
    resultDisplay.textContent = `You rolled ${result}!`;
  }, 1000);
};

die.addEventListener("click", handleDieRoll);
