// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseCheckbox = document.getElementById("upper");
var numCheckbox = document.getElementById("num");
var specialCheckbox = document.getElementById("special");
var password = "";
// Write password to the #password input
function writePassword() {
    password = "";
    var passwordLength = document.querySelector("#numChar").value;
    console.log(passwordLength);
    for (i = 0; i < passwordLength; i++) {
       characterRandomizer();
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = password.substr(0, passwordLength).split('').sort(function () { return 0.5 - Math.random() }).join('');
}

function characterRandomizer() {
    password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);

    if (uppercaseCheckbox.checked) {
        password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);

    } if (numCheckbox.checked) {
        password += String.fromCharCode(Math.floor(Math.random() * 10) + 48);

    } if (specialCheckbox.checked) {
        const specialCharacters = "!@#$%^&-_=+<>?[]{};:,.|~";
        password += specialCharacters[Math.floor(Math.random(), specialCharacters.length)];

    }
    return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
