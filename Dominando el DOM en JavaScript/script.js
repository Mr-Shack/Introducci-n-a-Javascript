document.getElementById('generateButton').addEventListener('click', () => {
    const length = parseInt(document.getElementById('passwordLength').value);
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;

    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const numbers = '0123456789';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let characterPool = lowercase;
    if (includeSymbols) characterPool += symbols;
    if (includeNumbers) characterPool += numbers;
    if (includeUppercase) characterPool += uppercase;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    document.getElementById('generatedPassword').textContent = `Contraseña generada: ${password}`;
});