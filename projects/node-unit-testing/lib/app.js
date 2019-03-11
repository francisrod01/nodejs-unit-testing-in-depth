const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const dbase = require('../config/database');
const auth = require('./auth');
const users = require('./users');

mongoose.connect(dbase());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Foo Fooing Bar'
  });
});

app.post('/user', (req, res) => {
  users
    .create(req.body)
    .then(result => res.json(result))
    .catch(err => handleError(res, err));
});

app.get('/user/:id', (req, res) => {
  users
    .get(req.params.id)
    .then(result => res.json(result))
    .catch(err => handleError(res, err));
});

app.delete('/user/:id', auth.isAuthorized, (req, res) => {
  users
    .delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => handleError(res, err));
});


function handleError (res, err) {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    });
  }

  return res.status(400).json(err);
}


module.exports = app;
