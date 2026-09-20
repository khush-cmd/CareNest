const express = require('express');
const registerUser = require('../controller/user.controller');
const loginUser = require('../controller/Login.controller');
const loginOutUser = require('../controller/Logout.controller');
const router = express.Router();

/**
 * POST - /api/auth/register
 * access - public
 */
router.post('/register',registerUser);


/**
 * POST - /api/auth/login
 * access - public
 */
router.post('/login',loginUser);

/**
 * POST - /api/auth/logout
 * access - public
 */
router.post('/logout',loginOutUser);

module.exports = router;