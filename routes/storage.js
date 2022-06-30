const express = require('express')
const router = express.Router()
const si = require('systeminformation');

router.get('/', async function(req, res) {
    res.set('Content-Type', 'application/json')
    res.send(await si.fsSize())
})

module.exports = router