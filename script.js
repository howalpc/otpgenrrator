// script.js

document.getElementById('generate').addEventListener('click', () => {
    fetch('/generate-otp')
        .then(response => response.json())
        .then(data => {
            document.getElementById('otp').innerText = data.otp;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});