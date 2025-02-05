// RANDOM PASSWORD GENERATOR

// Define the constante related with html

const result = document.getElementById("show_result");
const length = document.getElementById("LengthValue");
const Lowercase = document.getElementById("Lowercase");
const Uppercase = document.getElementById("Uppercase");
const Symbols = document.getElementById("Symbols");
const Numbers = document.getElementById("Numbers");


function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {



    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz" ;
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NumbersChrs = "0123456789";
    const symbolsChars = "!#$%&'()*+,-./:;<=>?@[\]^_`\"{|}~";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "" ;
    allowedChars += includeUppercase ? uppercaseChars : "" ;
    allowedChars += includeNumbers ? NumbersChrs : "" ;
    allowedChars += includeSymbols ? symbolsChars : "" ;

    if (
        !includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols
    ) {
        window.alert("Please select at least one character type.");
    }
    else {
        for(let i = 0; i < length; i++ ) {
        
            password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    
    
        }

    }
    
    return password;
}  


function generate() {

    const passwordLength = length.value;
    const includeLowercase = Lowercase.checked;
    const includeUppercase = Uppercase.checked;
    const includeNumbers = Numbers.checked;
    const includeSymbols = Symbols.checked;

    
    
    result.textContent = generatePassword(
        passwordLength,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
      );

}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert("Copied to clipboard!"))
        .catch(err => console.error("Failed to copy:", err));
}


function copy() {
    copyToClipboard(result.textContent);
}



function updateValue(value) {
    document.getElementById('rangeValue').textContent = value;
}
