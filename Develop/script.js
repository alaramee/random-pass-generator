// Assignment code here

// Variables for password criteria here
var lowerCase = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numbers = ["1","2","3","4","5","6","7","8","9","0",]; 
var symbols = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","^","`","|","~"]
var charMix []
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordGen = [];
  var passwordText = document.querySelector("#password");
  var passResult = "";

  if(selectSpecial = 'yes') {
    var randomSpecial = symbols[Math.floor(Math.random() * symbols.length)]
  password.push(randomSpecial);
  }
  console.log(randomSpecial);
  console.log(password)
}

function generatePassword() {

  var passLength = length();

  for (var i = 0; i < passLength; i++)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

