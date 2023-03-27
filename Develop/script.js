// Declaration of acceptable characters
function generatePassword(){
  var upperCase = "ABCDEFGHIJKMNLOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijkmnlopqrstuvwxyz";
  var numbers= "1234567890";
  var specialSym= "!@#$%^&*()_+><.,/?";
  var multiSelect = "";
  var randomPassword="";
  
//Input of password length 
  var passLength= prompt(
    "Your password must have betwenn 8 to 128 characters, please enter the desired quantity"
  );

  if (passLength < 8 || passLength > 128 ||isNaN(passLength) ) {
      alert("Your password does not meet the criteria. Please try again");
        return;

//Confirmation of password characters
    } else{
       var upperCaseConfirmation= confirm("If you would like your password to contain uppercase letters please press okay");
       var lowerCaseConfirmation= confirm("If you would like your password to contain lowercase letters please press okay");
       var numbersConfirmation= confirm("If you would like your password to contain numbers please press okay");
       var specialSymConfirmation= confirm("If you would like your password to contain special symbols please press okay");  
    }

//Declaration of multiSelect values
  if (upperCaseConfirmation) {multiSelect += upperCase};
  if (lowerCaseConfirmation) {multiSelect += lowerCase};
  if (numbersConfirmation) {multiSelect += numbers};
  if (specialSymConfirmation) {multiSelect += specialSym};


//Loop based on password length
  for (i = 0;i < passLength; i++) {

  randomPassword += multiSelect[Math.floor(Math.random() * multiSelect.length)]
}
      return(randomPassword)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
