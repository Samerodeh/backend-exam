'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    name: String,
    url: String,
    
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;