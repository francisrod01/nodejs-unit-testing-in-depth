const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const dbase = require('../config/database');

mongoose.connect(dbase());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Foo Fooing Bar'
  });
});


module.exports = app;
