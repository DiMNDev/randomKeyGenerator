//#region DOM
const generateButton = document.querySelector(".generate-btn");
const outputBox = document.querySelector(".generator-output");

generateButton.addEventListener("click", () => {
  myPassword = "";
  if (lengthBox.value !== "") {
    if (!phraseCheckbox.checked) {
      if (words.length > 1) getPassword(words);
      shortenPassword(myPassword, passwordLength);
      if (integerCheckbox.checked)
        addIntegers(myPassword, numberOfCharsToReplace);
      if (symbolCheckbox.checked)
        addSymbols(myPassword, numberOfCharsToReplace);
      outputBox.innerHTML = myPassword;
      console.log(myPassword.length);
    } else if (phraseCheckbox.checked) {
      getPhrase(words);
      outputBox.innerHTML = myPassword;
    }
  }
});
// logIt();
//#endregion

//#region Word input
let wordArray = ["1", "2", "3"];
const wordBox = document.querySelector(".word-container");

function updateWordBox(words) {
  wordBox.innerHTML = "";
  let counter = 0;
  for (word of words) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("onclick", "removeWord(this)");
    newDiv.id = counter;
    newDiv.innerHTML = word;
    newDiv.classList.add("word-box");
    wordBox.appendChild(newDiv);
    counter++;
  }
}
updateWordBox(words);

function removeWord(self) {
  words.splice(self.id, 1);
  updateWordBox(words);
}

const inputBox = document.querySelector(".input-box");
const plus = document.querySelector(".plusBtn");

plus.addEventListener("click", (event) => {
  //Add new words to the array
  if (inputBox.value !== "") {
    words.push(inputBox.value);
    inputBox.value = "";
    updateWordBox(words);
  }
});
//#endregion

//#region Checkboxes
const phraseCheckbox = document.querySelector("#checkPhrase");
const integerCheckbox = document.querySelector("#check1");
const symbolCheckbox = document.querySelector("#check2");

integerCheckbox.addEventListener("click", () => {
  if (integerCheckbox.checked) {
    console.log("Use Integers");
  }
});

symbolCheckbox.addEventListener("click", () => {
  if (symbolCheckbox.checked) {
    console.log("Use Symbols");
  }
});

phraseCheckbox.addEventListener("click", () => {
  if (phraseCheckbox.checked) {
    console.log("Use Phrase");
  }
});

//#endregion

//#region Length input
const lengthBox = document.querySelector("#lengthLimit");

lengthBox.addEventListener("change", () => {
  if (lengthBox.value > 20 || lengthBox.value < 8) {
    lengthBox.value = "";
  } else {
    passwordLength = lengthBox.value;
  }
});
//#endregion
