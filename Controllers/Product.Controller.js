'use strict';

const axios = require('axios');
const { request } = require('express');

const getProduct = ((req, res) => {

    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic').then(informations => {

        const data = informations.data.drinks;

        res.json(data)


    }).catch(error => {

        res.send(error);


    })

});
module.exports = getProduct;