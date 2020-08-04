// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Start of Code
// I set the variables that would be used for the password. I set them all up separately because I wanted to make sure that the uppercase and lowercase would be separate.
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "}", ".", "/", "*", "_", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;


function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Where the size of the password is confirmed (while the password cannot be less than or equal to 7, cannnot be greater than or equal to 129)
  // This is to confirm that the password will not be less than 8 or more than 128
  //Prompt will open saying how many characters your password will be
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

       
      alert(`Your password will have ${confirmLength} characters`);

    
    var confirmSpecialCharacter = confirm("Do you want special characters?");
    var confirmNumericCharacter = confirm("Do you want numbers?");    
    var confirmLowerCase = confirm("Do you want lowercase letters?");
    var confirmUpperCase = confirm("Do you want uppercase letters");
       
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose!");
        var confirmSpecialCharacter = confirm("Do you want special characters?");
        var confirmNumericCharacter = confirm("Do you want numbers?");    
        var confirmLowerCase = confirm("Do you want lowercase letters?");
        var confirmUpperCase = confirm("Do you want uppercase letters");   
    } 

      
      var passwordCharacters = [];
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      
      var randomPassword = ""
      // Math floor used to randomize the letters and numbers and special characters so the password is generated
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
