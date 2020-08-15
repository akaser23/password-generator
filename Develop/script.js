var passLength = function () {
  var len = window.prompt("How long would you like your password to be? Choose a password length between 8 to 128 characters."
  );
  if (len >= 8 && len <= 128) {
    return len;
  }
  else {
    alert("Please enter a valid character length.");
    return passLength();
  }
}


var passLower = function () {
  var low = window.prompt("Would you like to include LOWERCASE characters? Input yes or no."
  );

  low = low.toLowerCase();

  if (low === "yes" || low === "no") {
    return low;
  }
  else {
    alert("Please input yes or no.");
    return passLower();
  }
}

var passUpper = function () {
  var up = window.prompt("Would you like to include UPPERCASE characters? Input yes or no."
  );

  up = up.toLowerCase();

  if (up === "yes" || up === "no") {
    return up;
  }
  else {
    alert("Please input yes or no.");
    return passUpper();
  }
}

var passNum = function () {
  var num = window.prompt("Would you like to include NUMERIC characters? Input yes or no."
  );

  num = num.toLowerCase();

  if (num === "yes" || num === "no") {
    return num;
  }
  else {
    alert("Please input yes or no.");
    return passNum();
  }
}

var passSpec = function () {
  var spec = window.prompt("Would you like to include SPECIAL characters? Input yes or no."
  );

  spec = spec.toLowerCase();

  if (spec === "yes" || spec === "no") {
    return spec;
  }
  else {
    alert("Please input yes or no.");
    return passSpec();
  }
}



var generatePassword = function () {

  var length = passLength();
  var lower = passLower();
  var upper = passUpper();
  var number = passNum();
  var special = passSpec();

  if (lower === "no" && upper === "no" && number === "no" && special === "no") {
    alert("Please enter at least ONE character specification.");
    return generatePassword();
  }

  var characters = "";
  if (lower === "yes") {
    characters = characters + "abcdefghijklmnopqrstuvwxyz";
  }
  if (upper === "yes") {
    characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (number === "yes") {
    characters = characters + "0123456789";
  }
  if (special === "yes") {
    characters = characters + "!@#$%&*_-+=?/.><";
  }

  var pass = "";

  for (var i = 0; i < length; i++) {
    var char = Math.floor(Math.random() * characters.length + 1);

    pass += characters.charAt(char);
  }
  
  return pass;
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


