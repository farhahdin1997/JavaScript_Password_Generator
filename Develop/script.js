// Assignment Code
var generateBtn = document.querySelector("#generate");
let length;
let confirmLower;
let confirmUpper;
let confirmNumber;
let confirmSpecial;
let userChoices;
 
//Declare the lowercase variables in an array
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Var To Upper Case ------------
let blankU = [];
let toUpper = function (x) {
 return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

//Declare the number and special character variables in an array
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
// Start Function
// Start Function
function generatePassword() {
  // Ask four user Input
length = prompt("How many characters would you like your password? Choose between 8 and 50");
console.log("Password length " + length);

// if there is no number inputed a message will apear to alert the user that something needs to be inputed
  if(!length) {
    alert("Required value");

  // else if a number between 8 and 50 has been entered it will add to the length and the password will generate with the length of the number
  } else if (length < 8 || length > 50) {
   length = prompt("You must choose between 8 and 50");
    console.log("Password length " + length);
  }

    
    
  }

 