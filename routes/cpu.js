const express = require('express')
const router = express.Router()
const si = require('systeminformation');


router.get('/temp', async function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.send(`${(await si.cpuTemperature()).main}`)
})

router.get('/load', async function(req, res) {
    res.set('Content-Type', 'application/json');
    res.send(`{"currentLoad": ${(await si.currentLoad()).currentLoad}, "avgLoad": ${(await si.currentLoad()).avgLoad}}`)
})

router.get('/currentload', async function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.send(`${cpuLoad}`)
})

router.get('/avgload', async function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.send(`${(await si.currentLoad()).avgLoad}`)
})

router.get('/info', async function(req, res) {
    res.set('Content-Type', 'application/json')
    res.send(static.cpuInfo)
})


module.exports = router
