const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const app = express();

connectDB();
app.use(express.json());

app.get('/home', (req, res) => {
    res.status(200).json("Welcome, your app is working well");
});

app.get('/', (req, res) => {
    res.status(200).json("Welcome, your app is working well");
});


app.use('/api/products', productRoutes);



module.exports = app;











