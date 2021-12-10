/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Entire function start to generate a random password - created strings and prompts within below

function generatePassword() {
  // Creating Strings of all characters that can be used: Numbers, lowercase, uppercase, and special characters
  let numChar = "1234567890";
  let lowerCaseChar = "abcdefghijklmnopqrstuvwyz";
  let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let specialChar = "!@#$%^&*()~?<>/-=";

  // Will prompt user to enter a number between 8 and 128
  let passLength = prompt(
    "Select a length for your password between 8 and 128 characters."
  );

  // Accounts for scenario where user does not enter a length between 8 and 128.  Prompts to reenter number
  if (passLength < 8 || passLength > 128) {
    passLength = prompt(
      "Invalid number, please select a length between 8 and 128."
    );
  }
  // If user still does not enter a valid number, Generator stops
  if (passLength < 8 || passLength > 128) {
    function stopGen() {
      let halt = "No Password - Enter a number between 8 and 128";
    }
    return halt;
  }

  // Creates string of all available characters in each case (upper, lower, number, and special) in order to concat with those strings after prompts
  let stringChar = "";

  // Prompts user if they would like to use numbers - if so, adds in number string through concat
  let wantNum = confirm("Would you like to use numbers in your password?");
  if (wantNum) {
    stringChar = stringChar.concat(numChar);
  }

  //Prompts user if they would like to use lowercase - if so, adds in lowercase string through concat
  let wantLower = confirm(
    "Would you like to use lowercase letters in your password?"
  );
  if (wantLower) {
    stringChar = stringChar.concat(lowerCaseChar);
  }

  //Prompts user if they would like to use uppercase - if so, adds in uppercase string through concat
  let wantUpper = confirm(
    "Would you like to use uppercase letters in your password?"
  );
  if (wantUpper) {
    stringChar = stringChar.concat(upperCaseChar);
  }

  //Prompts user if they would like to use special characters - if so, adds in special character string through concat
  let wantSpecial = confirm(
    "Would you like to use special characters in your password?"
  );
  if (wantSpecial) {
    stringChar = stringChar.concat(specialChar);
  }

  // If password length was selected but user opted out of numbers, lower and uppercase and special characters, prompt to choose at lease one
  if (!wantNum && !wantLower && !wantUpper & !wantSpecial) {
    prompt(
      "Must select at least one category of number, lowercase, uppercase, or special character."
    );
  }

  //Set variable to return
  let finalPass = "";

  // Gets characters randomly from stringChar collection after all prompts have been answered
  for (let i = 0; i <= passLength; i++) {
    var randomize = Math.floor(Math.random() * stringChar.length);
    finalPass = finalPass.concat(stringChar.charAt(randomize));
  }
  return finalPass;
}

// function runPass() {
//   let finalPass = ""

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
