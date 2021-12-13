// Assignment code here

//Undefined variable
var initPrompt;

// Variables for password criteria here and criteria mix
var lowerCase = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numbers = ["1","2","3","4","5","6","7","8","9","0",]; 
var symbols = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","^","`","|","~"];
var passGen = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passResult = "";
  var initPrompt = window.prompt("Please enter the number of characters would you would like your password to contain. ");

  passwordText.value = newPassword;



  //If statements to help navigate through chosen character types
  if (initPrompt < 8 | initPrompt > 128 | isNaN(initPrompt)) {
    window.alert("This answer is not valid. Must between 8 and 128 characters.");
    return initPrompt()
  }

  if (confirm("Would you like to include 'Lowercase' letters in your password?")) {
    passGen = passGen.concat(lowerCase);
  }
    
  if (confirm("Would you like to include 'Uppercase' letters in your password?")) {
    passGen = passGen.concat(upperCase);
  }

  if (confirm("Would you like to include 'Special Characters' in your password?")) {
    passGen = passGen.concat(symbols);
  }

  if (confirm("Would you like to include 'Numbers' in your password?")) {
    passGen = passGen.concat(numbers);
  }

  if (passGen.length === 0) {
    window.alert("Please select at least one character type");
    return; 
  }
  
  return {initPrompt, passGen}
   
}
