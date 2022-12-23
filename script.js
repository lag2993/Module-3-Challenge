// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set Min and Max password lengths
const PMin = 8;
var Pmax = 128;
var generatedPass;
// keyCha generation - Array analysis- from looking thhrough UT-16
// Special Characters array location 0-16, 27-33, 60-65, 91-94 - spacing: 16,7,6,8
// Number array location 16 -25 - spacing: 10
// Uppercase array location  33-58 - spacing: 24
// lowercase array location 65 - 89  - spacing: 24
 

function generatePassword(){

  // Password Parameters
  Pmax = prompt("How many characters should your password be?", "Please choosee between 8 - 128 characters");
  console.log(Pmax);
  let outPut;
  // Reset Parameters condition
  if (Pmax < 8 && Pmax > 0){
    alert("Password does not have enough Characters!")
    generatePassword();
  
  } else if (Pmax > 128){
    alert("Password has too many Characters!")
    generatePassword();
  } else if (Pmax === "Please choosee between 8 - 128 characters"){
    console.log(Pmax);
    alert("Please choose a password length between 8-128 characters.")
    generatePassword(); 
  }else if(Pmax === null){
    alert("Please choose a password length between 8-128 characters.")
    generatePassword(); 
  }
  // Conditional to start function. 
  else { 

// confirms
// lowercase
  var lowC = confirm("Would you like the password to contain lowercase characters?");
// uppercase 
  var UppC = confirm("Would you like the password to contain uppercase characters?");
// numeric
  var NumC = confirm("Would you like the password to contain numbers?");
// special characters
  var SpcC = confirm("Would you like the password to contain special characters?");

// Generating Possible Character Array
  const keyCha = [];
  for (let i=32; i<127; i++){
  keyCha.push(String.fromCharCode(i));
  };   

//Generating arrays to check if elements exist in password. 
//Creating Holds to push towards Password resource array from character array.
  var keyTempt = keyCha;
  console.log(keyTempt);
    // indentify where lower case starts which is "a" then splice 26 from there.
  var lowHold = keyTempt.splice(keyTempt.indexOf("a"),26);
  var keyTempt = keyCha;
    // indentify where Upper case starts which is "A" then splice 26 from there.
  var UppHold = keyTempt.splice(keyTempt.indexOf("A"),26);
  var keyTempt = keyCha;
    // indentify where numbers start which is "0" then splice 10 from there.
  var NumHold = keyTempt.splice(keyTempt.indexOf("0"),10);
  var keyTempt = keyCha;
  // indentify where special case groups starts:
  // " " is the first element then splice 16
  var Spc1Hold = keyTempt.splice(keyTempt.indexOf(" "),16);
  var keyTempt = keyCha;
  //":" is the first element in 2nd group then splice 7;
  var Spc2Hold = keyTempt.splice(keyTempt.indexOf(":"),7);
  var keyTempt = keyCha;
  // Combine  Special Character Holds.
  let SpcHold = Spc1Hold.concat(Spc2Hold);
  // "[" is the first element in 3rd group then splice 6;
  var Spc3Hold = keyTempt.splice(keyTempt.indexOf("["),6);
  var keyTempt = keyCha;
  // Combine  Special Character Holds.
  SpcHold = SpcHold.concat(Spc3Hold);
  // "{" is the first element in 4th group then splice 8;
  var Spc4Hold = keyTempt.splice(keyTempt.indexOf("{"),8);
  var keyTempt = keyCha;
    // Combine  Special Character Holds.
  SpcHold = SpcHold.concat(Spc4Hold);

//Creating Array to push forward desired elements
  var keyUpdt = [];
  console.log(keyUpdt);




// Checking Confirms to splice out unwanted elements
console.log(keyUpdt);
  if (lowC == true){
    keyUpdt  = keyUpdt.concat(lowHold);
    console.log(keyUpdt);
  }
  if (UppC == true){
    keyUpdt = keyUpdt.concat(UppHold);
    console.log(keyUpdt);
  }
  if (NumC == true){
    keyUpdt = keyUpdt.concat(NumHold);
    console.log(keyUpdt);
  } 
  if (SpcC == true){
    keyUpdt = keyUpdt.concat(SpcHold);
    console.log(keyUpdt);  
  }
// Random num key generator
  console.log(keyUpdt);
  let password1 = [];
  for (let i = 0;  i<Pmax;i++){
    var location = Math.floor(Math.random()*(keyUpdt.length)); 
    password1[i] = keyUpdt[location];
  }
// Password array check
  console.log(password1);
// Join password into one output string 
  outPut = password1.join("");
  console.log(outPut);
  // Reset Array
  keyUpdt = keyCha;
  generatedPass = outPut;
  }
};

// Write password to the #password input
function writePassword() {

  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = generatedPass;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);