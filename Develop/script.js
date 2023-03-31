// Assignment Code
function generatePassword(){
// Creates window to ask for password length
var length = window.prompt("choose a password length between 8 and 128 characters")
// available characters
char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOIP0123456789!@#$%^&*()"


// for loop to generate password length
passwordText =[""]
  for(i=0;i < length; i++){
    passwordText += char.charAt(Math.random() * char.length)
    return passwordText
  }

};
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
