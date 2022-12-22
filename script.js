// Assignment Code
var generateBtn = document.querySelector("#generate");



// Set Min and Max password lengths
const PMin = 8;
var Pmax = 128;

var keyMatch = [];


// keyCha generation - Array analysis- from looking thhrough UT-16
// Special Characters array location 0-16, 27-33, 60-65, 91-94 - spacing: 16,7,6,8
// Number array location 16 -25 - spacing: 10
// Uppercase array location  33-58 - spacing: 24
// lowercase array location 65 - 89  - spacing: 24
 

function generatePassword(){
  // Password Parameters
  Pmax = prompt("How many characters should your password be?", "Please choosee between 8 - 128 characters");
  let outPut;
  
  if (Pmax < 8){
    alert("Too little Characters!")
    generatePassword();
  
  } else if (Pmax > 128){
    alert("Too many Characters!")
    generatePassword();
  } else {; 

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
//Copying Character Array to remove elements according to confirms. 
  var keyUpdt = keyCha;
  console.log(keyUpdt);



//Generating arrays to check if elements exist in password. 
  var keyTempt = keyCha;
  console.log(keyTempt);
  var lowArr = keyTempt.splice(keyTempt.indexOf("a"),24);
  console.log(lowArr);

// Checking Confirms to splice out unwanted elements

  if (lowC === false){
  // indentify where lower case starts which is "a" then splice 26 from there.
  let lowCut = keyUpdt.indexOf("a");
  keyUpdt.splice(lowCut,26);

  }
  else{ 


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
  // indentify where special case groups starts:
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
  // random num key generator;
  let password = [];
  for (let i = 0;  i<Pmax;i++){
    var location = Math.floor(Math.random()*(keyUpdt.length-1)); 
    password[i] = keyUpdt[location];
  }
  // password array check
  console.log(password);
// join password into one output string 
  outPut = password.join("");
  // Reset Array
  keyUpdt = keyCha;

// Conditionals for rare occassion that .random does not choose an element from  the appropriate array. 
// if(lowC === true){
//   let lowAChck = lowArr.every( item => {
//     return outPut.includes(item);
//   });
//   if (lowAChck === false){
//     generatePassword();
//   };
// }  
// if(UppC === true){
//     let UppAChck = UppArr.every( item => {
//       return outPut.includes(item);
//     });
//     if (UppAChck === false){
//       generatePassword();
//     }
    
// }
// if(NumC === true){
//     let NumAChck = NumArr.every( item => {
//       return outPut.includes(item);
//     });
//     if (NumAChck === false){
//       generatePassword();
//     }
    
// }
// if(SpcC === true){
//     let SpcAChck = SpcC.every( item => {
//       return outPut.includes(item);
//     });
//     if (SpcAChck === false){
//       generatePassword();
//     }    
// }
  }
return outPut
};

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);