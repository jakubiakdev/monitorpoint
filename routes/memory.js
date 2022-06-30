const express = require('express')
const router = express.Router()
const si = require('systeminformation');

router.get('/used', async function(req, res) {
    res.set('Content-Type', 'text/plain');
    let percentage = ((await si.mem()).used / (await si.mem()).total) * 100
    res.send(`${percentage}`)
})

router.get('/free', async function(req, res) {
    res.set('Content-Type', 'text/plain');
    let percentage = ((await si.mem()).free / (await si.mem()).total) * 100
    res.send(`${percentage}`)
})


module.exports = router