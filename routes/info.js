const express = require('express')
const router = express.Router()
const packageJson = require('../package.json')

router.get('/', function(req, res) {
    res.send(`This service uses MonitorPoint ${packageJson.version} (avalible at ${packageJson.homepage}). MonitorPoint is licenced under AGPL 3.0 or later. © Jakubiakdev and contributors 2022.`)
})

module.exports = router
