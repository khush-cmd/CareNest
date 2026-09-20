const express = require('express');
const route = express.Router();

const getProfile = require('../controller/getProfile.controller');
const authMiddleware = require('../middleware/auth.middleware');


route.get('/profile',authMiddleware,getProfile)

module.exports = route