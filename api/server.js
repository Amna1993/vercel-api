const express = require('express');
const app = express();
const PORT = 400;

app.get('/home', (req, res) => {
    res.status(200).json("Welocme, your app is working well");
});
app.get('/', (req, res) => {
    res.status(200).json("Welocme, your app is working well");
});

app.listen(PORT, () => {
    console.log(`Server running: ${PORT}`);
});

module.exports = app;