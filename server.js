const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const mongoose = require("mongoose");

mongoose.connect(

    "mongodb://localhost:27017",

    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    });

const PORT = process.env.PORT;

const app = express()

const getProduct = require('./Controllers/Product.Controller');

const { createProduct, readProduct, deleteProduct, updateProduct } = require('./Controllers/Function.Controller');

app.use(cors());
app.use(express.json());

app.get('/',
    function (req, res) {
        res.send('Hello World')
    })

app.get('/products', getProduct);

app.post('/product', createProduct);
app.get('/product', readProduct);
app.delete('/product/ : nameId', deleteProduct);
app.put('/product/ : nameId', updateProduct);

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})