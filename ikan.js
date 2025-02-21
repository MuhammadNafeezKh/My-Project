const lengthInput = document.getElementById('length-input');
const lengthValue = document.getElementById('length-value');
const passwordField = document.getElementById('password');
const popup = document.getElementById('popup');

lengthInput.addEventListener('input', () => {
    lengthValue.textContent = lengthInput.value;
});

function generatePassword() {
    const length = lengthInput.value;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/";

    let validChars = "";
    let password = "";

    if (includeLowercase) validChars += lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSpecial) validChars += specialChars;

    if (validChars.length === 0) {
        alert("Pilih setidaknya satu opsi karakter!");
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    passwordField.value = password;
}

function copyPassword() {
    passwordField.select();
    document.execCommand("copy");

    // 🔹 Menampilkan popup
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
}
