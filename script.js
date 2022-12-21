// Assignment Code
var generateBtn = document.querySelector("#generate");

// Pattern elements

// Set Min and Max password lengths
const PMin = 8;
var Pmax = 128;

var keyMatch = [];
var keyCha = [];
for (let i=32; i<127; i++){
  keyCha.push(String.fromCharCode(i));
}
console.log(keyCha);

// keyCha generation - Array analysis 
// 0-16, 27-33, 60-65, 91-94 Special Characters - spacing: 16,7,6,8
// 16 -25 Number - spacing: 10
// 33-58 Uppercase - spacing: 24
// 65 - 89 lowercase - spacing: 24
 
// Password Parameters 
// lowercase
function generatePassword(){
var lowC = confirm("Would you like the password to contain lowercase characters?");


// uppercase
var UppC = confirm("Would you like the password to contain uppercase characters?");
// numeric
var NumC = confirm("Would you like the password to contain numbers?");
// special characters

var SpcC = confirm("Would you like the password to contain special characters?");

Pmax = prompt("How many characters should your password be?", "Please choosee between 8 - 128 characters");

if (Pmax < 8){
  alert("Too little Characters!")
} else if (Pmax > 128){
  alert("Too many Characters!")
};

var keyUpdt = keyCha;

if (lowC === false){
  // indentify where lower case starts which is "a" then splice 26 from there.
  let lowCut = keyUpdt.indexOf("a");
  keyUpdt.splice(lowCut,26);

}
if (UppC === false){
    // indentify where Upper case starts which is "A" then splice 26 from there.
  let UpCut = keyUpdt.indexOf("A");
  keyUpdt.splice(UpCut,26);
}
if (NumC === false){
    // indentify where numbers start which is "0" then splice 10 from there.
    let NumCut = keyUpdt.indexOf("0");
    keyUpdt.splice(NumCut,10);
}
if (SpcC === false){
  // indentify where special case groups starts
  // " " is the first element then splice 16
  let SpcCut1 = keyUpdt.indexOf(" ");
  keyUpdt.splice(SpcCut1,16);
  //":" is the first element in 2nd group then splice 7;
  let SpcCut2 = keyUpdt.indexOf(":");
  keyUpdt.splice(SpcCut2,7);
  // "[" is the first element in 3rd group then splice 6;
  let SpcCut3 = keyUpdt.indexOf("[");
  keyUpdt.splice(SpcCut3,6);
  // "{" is the first element in 4th group then splice 8;
  let SpcCut4 = keyUpdt.indexOf("{");
  keyUpdt.splice(SpcCut4,8);
}

  // create reset so that the page will reload after elements are cut out to 
  // start from scratch.
  // random num key generator;
  let password = [];
  for (let i = 0;  i<Pmax;i++){
    password[i] = Math.floor(Math.random()*(keyUpdt.length-1)); 
    password[i] = keyUpdt[password[i]];
  }
console.log(password);
// join password into one output string
console.log(password.length);
let outPut = password.join("");
console.log(outPut);
console.log(password);
keyUpdt = keyCha;



return outPut;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Attempt to add confirm option and copy password to clipboard. 
// generateBtn.addEventListener("click", confirmButn);

// function confirmButn(){

// let finalReq = confirm("Are you happy with your password?");

// if (finalReq === true){
// // navigator.clipboard.writeText(outPut).then(
// //   () => {
// //     
// //   }

// // );
// // alert("The password has been copied.")
//   }else {
//   writePassword();

// }
// }