// Require packages
const express = require('express');
const request = require('request');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');

// Setup Node Server
const app = express();
const PORT = process.env.PORT || 5000;

// Variables for the LCBO API 
const API_KEY = 'MDphMTE2ZTUxNi0yZTA3LTExZTgtODE2Ni05M2IzNDRkMzI3YzM6U2VBalFHQVRtamFNV2RmZXdIb2tnQ21WYlVCNEowTXUwYTBM';
const BASE_PROD_URL = 'https://lcboapi.com/products';
const BASE_STORE_URL = 'https://lcboapi.com/stores';

app.get('/api/hello', (req,res) => {
    res.send({ express: 'Hello From Express '});
});

// For getting all beers from Beaus' data list
app.get('/list', (req,res) => {
    request(`${BASE_PROD_URL}?where=is_seasonal&where_not=is_dead,is_discontinued&q=beaus+all_natural&access_key=${API_KEY}`,(error, response, body) => {
        res.send(body);
    });
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));