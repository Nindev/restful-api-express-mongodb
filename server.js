const express = require("express");
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5656;

// Database connection
const db = mongoose.connect('mongodb://localhost:27017/ecommerceTest', { useNewUrlParser: true });

// Routers
const productRouter = require('./Routes/productRouter');

// Routes
app.use('/api/Products', productRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})