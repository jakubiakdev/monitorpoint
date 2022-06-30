const express = require('express')
const router = express.Router()
const si = require('systeminformation');

router.get('/:name', async function(req, res) {
    if (req.params.name.match(/[a-zA-Z]|\d|-|_|@/g) == undefined) {
        res.status(400)
        res.send("Invalid/No service name")
    } else {
    res.set('Content-Type', 'application/json')
    res.send(await si.services(`${req.params.name.match(/[a-zA-Z]|\d|-|_|@/g).join("")}`))
    }
})

module.exports = router