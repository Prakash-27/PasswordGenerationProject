const resultValue = document.getElementById("result");
const showErrorElt = document.getElementById("showError");
const generateButton = document.getElementById("generate");
const clipboardButton = document.getElementById("clipboard");
const lengthValue = document.getElementById("length");
const uppercaseLetter = document.getElementById("uppercase");
const lowercaseLetter = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

// Define character sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

generateButton.addEventListener("click", () => {
    console.log('CLICKED');
    resultValue.style.color = "black";
    resultValue.style.fontWeight = "600";
    const length = lengthValue.value;
    const uppercase = uppercaseLetter.checked;
    const lowercase = lowercaseLetter.checked;
    const number = numbers.checked;
    const symbol = symbols.checked;
    const password = generatePassword(length, uppercase, lowercase, number, symbol);
    resultValue.value = password;
});

function generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
    let charSet = "";

    if(length<4 || length>20) {
        showErrorElt.style.color = "#FF0000";
        showErrorElt.style.fontSize = "18px"
        showErrorElt.style.fontWeight = "600"
        showErrorElt.innerHTML = "You must choose only length between 4 and 20 for the password.❗❗";
        return "";
    }

    if(useUppercase) charSet += uppercaseChars;
    if(useLowercase) charSet += lowercaseChars;
    if(useNumbers) charSet += numericChars;
    if(useSymbols) charSet += specialChars;
    
    if(charSet === "") {
        showErrorElt.style.color = "#FF0000";
        showErrorElt.style.fontSize = "18px"
        showErrorElt.style.fontWeight = "600"
        showErrorElt.innerHTML = "You must select at least one character set for the password.❗❗";
        return "";
    }

    let password = "";
    for(let i = 0; i < length; i++) {
        const randomChar = getRandomChar(charSet);
        password += randomChar;
    }

    showErrorElt.innerHTML = "";
    resultValue.style.backgroundColor = "#fff";

    return password;
}

function getRandomChar(charSet) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet.charAt(randomIndex);
}

clipboardButton.addEventListener("click", () => {
    console.log(resultValue.value);
    if(resultValue.value === "") return;
    resultValue.style.backgroundColor = "#fff";
    showErrorElt.innerHTML = "copied ✅";
    showErrorElt.style.fontSize = "18px"
    showErrorElt.style.fontWeight = "600"
    showErrorElt.style.color = "#66FF00";
    navigator.clipboard.writeText(resultValue.value);
});
