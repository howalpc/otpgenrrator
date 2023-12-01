// server.js

const express = require('express');
const app = express();

app.use(express.json());

app.get('/generate-otp', (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    res.json({ otp });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});