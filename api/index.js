const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config(); // Ensure this is called before accessing process.env

const app = express();

// Connect to Database
connectDB();

app.use(express.json());

// Default Route
app.get('/home', (req, res) => {
    res.status(200).json("Welcome, your app is working well");
});

app.get('/', (req, res) => {
    res.status(200).json("Welcome, your app is working well");
});

// Product Routes
app.use('/api/products', productRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
