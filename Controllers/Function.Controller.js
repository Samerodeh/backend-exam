'use strict';

const productModel = require('../Models/Product.Model');

const createProduct = (req, res) => {

    productModel.find((error, data) => {

        if (error) {
            res.send('exist');
        } else {

            const productModel = new productModel(() => {
                data.save();
                res.send(data);
            })
        }

    })
}

const readProduct = (req, res) => {

    productModel.find((error, data) => {

        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    })
}

const deleteProduct = (req, res) => {

    const nameId = req.params.nameId;

    productModel.remove({ name: nameId }, (error, data) => {

        if (error) {
            res.send(error);
        }
    }).then(() => {

        productModel.remove((error, data) => {

            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }

        })
    })
}

const updateProduct = (req, res) => {
    const { name } = name;
    const nameId = req.params.nameId;

    productModel.findOne({ name: name }, (error, data) => {

        if (error) {
            res.send(error);
        }
    }).then(() => {
        productModel.find((error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
                data.save();
                const data = { name: name, url: url }
            }

        })
    })
}

module.exports = { createProduct, readProduct, deleteProduct, updateProduct };