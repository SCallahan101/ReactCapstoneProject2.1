'use strict';
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');

const config = require('../config');
const router = express.Router();

const createAuthToken = function(user) {
  return jwt.sign({user}, config.JWT_SECRET, {
    subject: user.username,
    expiresIn: config.JWT_EXPIRY,
    algorithm: 'HS256'
  });
};

const localAuth = passport.authenticate('local', {session: false});
router.use(bodyParser.json());
// The user provides a username and password to login
router.post('/login', localAuth, (req, res) => {
  console.log(`In /login request successfully received Username: ${req.body.username} and PW: ${req.body.password}`);
  const authToken = createAuthToken(req.user.serialize());
  res.json({authToken});
  console.log('AuthToken successfully retrieved!');
  fetch('http://localhost:3000/api/protected', {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    },
    dataType: 'json'
  }).then((res) => {
    res.json('It works with jwt');
  }).catch((error) => console.error(error));
});

const jwtAuth = passport.authenticate('jwt', {session: false});

// The user exchanges a valid JWT for a new one with a later expiration
router.post('/refresh', jwtAuth, (req, res) => {
  const authToken = createAuthToken(req.user);
  res.json({authToken});
});

module.exports = {router};
