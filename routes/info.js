const express = require('express')
const router = express.Router()
const packageJson = require('../package.json')

router.get('/', function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.send(`This service uses MonitorPoint ${packageJson.version} (available at ${packageJson.homepage}). MonitorPoint is licensed under AGPL 3.0 or later. © Jakubiakdev and contributors 2022.`)
})

module.exports = router
