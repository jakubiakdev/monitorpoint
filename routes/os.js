const express = require('express')
const router = express.Router()

router.get('/', async function(req, res) {
    res.set('Content-Type', 'application/json')
    res.send(static.os)
})

module.exports = router