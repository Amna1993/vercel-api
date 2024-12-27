const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.status(200).json("Welcome, your app is working well");
});

app.get('/', (req, res) => {
    res.status(200).json("Welcome, your app is working well");
});

// Export the app to be used as a serverless function
module.exports = app;
