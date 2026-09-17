const express = require('express');
const registerUser = require('../controller/user.controller');
const router = express.Router();

/**
 * GET - /api/health
 * access - public
 */
router.post('/register',registerUser);
module.exports = router;