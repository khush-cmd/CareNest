
const express = require("express");
const router = express.Router();

const healthApi = require("../controller/health.controller");

router.get("/health", healthApi);

module.exports = router;