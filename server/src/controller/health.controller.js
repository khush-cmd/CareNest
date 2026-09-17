const express = require('express');

const healthApi = (req,res) => {
    res.json({
        message : "Checking the connection"
    })
}
module.exports = healthApi