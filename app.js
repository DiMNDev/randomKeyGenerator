let myPassword = "";
//#region Demo Values (for log)
let wordPassword = "";
let clampedPassword = "";
let passwordWithIntegers = "";
let passwordWithSymbols = "";
//#endregion

//#region Password Preferences
let words = [
  "kerfuffle",
  "hullaballloo",
  "cacophony",
  "ragamuffin",
  "whippersnapper",
  "gobbledygook",
  "gibberish",
  "poppycock",
];
const symbols = "!@#$%^&*()|/~`'\"";
let wordLength = 4;
let passwordLength = 20;
let numberOfCharsToReplace = 4;
//#endregion

//#region base Password
function getPassword(wordArray) {
  let returnPassword = "";
  for (let i = wordLength; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * wordArray.length);
    returnPassword += wordArray[randomNumber];
  }
  //   console.log(password);
  //   console.log(password.length);
  myPassword = returnPassword;
  return returnPassword;
}
//#endregion
//--------------------------------------------------
//#region Shorten Password
function shortenPassword(password, maxLength) {
  let returnPassword = "";
  for (let i = maxLength; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * password.length);
    returnPassword += password.charAt(randomNumber);
  }
  myPassword = returnPassword;
  return returnPassword;
}
//#endregion
//--------------------------------------------------
//#region Add Integers
function addIntegers(password, length) {
  let returnPassword = "";
  let trash = password.split("");
  for (let i = length; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * password.length);
    trash[randomNumber] = password.charCodeAt(randomNumber);
  }
  //   console.log("trash:", trash);
  for (char of trash) {
    returnPassword += char;
    // console.log(char);
  }
  returnPassword = shortenPassword(returnPassword, passwordLength);
  myPassword = returnPassword;
  return returnPassword;
}

//#endregion
//--------------------------------------------------
//#region Add Symbols
function addSymbols(password, length) {
  let returnPassword = "";
  let trash = password.split("");
  for (let i = length; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * password.length);
    let symbolIndex = Math.floor(Math.random() * symbols.length);
    trash[randomNumber] = symbols.charAt(symbolIndex);
  }
  for (char of trash) {
    returnPassword += char;
  }
  myPassword = returnPassword;
  return returnPassword;
}
//#endregion

//#region Logs
function logIt() {
  myPassword = wordPassword = getPassword(words);
  clampedPassword = shortenPassword(myPassword, passwordLength);
  passwordWithIntegers = addIntegers(myPassword, numberOfCharsToReplace);
  passwordWithSymbols = addSymbols(myPassword, numberOfCharsToReplace);
  console.log(wordPassword);
  console.log(clampedPassword);
  console.log(passwordWithIntegers);
  console.log(passwordWithSymbols);
}
//#endregion

//#region Phrase Section
function getPhrase(wordArray) {
  let returnPassword = "";
  let phraseArray = [];
  for (let i = wordLength; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * wordArray.length);
    phraseArray.push(wordArray[randomNumber]);
  }
  console.log(phraseArray);

  for (let i = phraseArray.length - 1; i > 0; i--) {
    returnPassword += phraseArray[i] + "-";
  }
  returnPassword += phraseArray[phraseArray.length - 1];
  myPassword = returnPassword;
  return returnPassword;
}
//#endregion
