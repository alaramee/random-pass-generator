// Assignment code here

//Undefined variable
var passLength;

// Variables for password criteria here and criteria mix
var lowerCase = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numbers = ["1","2","3","4","5","6","7","8","9","0",]; 
var symbols = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","^","`","|","~"]
var charMix = []
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var passwordGen = [];
  var passwordText = document.querySelector("#password");
  var passResult = "";
  var initPrompt = window.prompt("Please enter the number of characters would you would like your password to contain. ");

  passwordText.value = newPassword;

  //If statements to help navigate through chosen character types
  if (passLength < 8 | passLength > 128 | isNaN(passLength)) {
    window.alert("This answer is not valid. Must between 8 and 128 characters.");
    return initPrompt()
  }

  if (confirm("Would you like to include 'Lowercase' letters in your password?")) {
    charMix = charMix.concat(lowerCase);
  }
    
  if (confirm("Would you like to include 'Uppercase' letters in your password?")) {
    charMix = charMix.concat(upperCase);
  }

  if (confirm("Would you like to includet 'Special Characters' in your password?")) {
    charMix = charMix.concat(symbols);
  }

  if (confirm("Would you like to include 'Numbers' in your password?")) {
    charMix = charMix.concat(numbers);
  }

  if (charMix.length === 0) {
    alert("Please select at least one character type");
    return; // getPrompts()
  }

  else {
    for(var i=0;  i<passCriteria; i++){
    var random = Math.floor(Math.random()*PasswordGenerator.length);
    passResult += passwordGen[random];
  }
  
  return {charLength, charMix}
   
  }
}