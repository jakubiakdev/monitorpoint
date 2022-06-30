const express = require('express')
const app = express()
const populateStatic= require('./util/populateStatic.js')
const si = require('systeminformation');


static = {} //global varibles that don't change

populateStatic()

setInterval(updateLoad, 1000)
async function updateLoad() {
    cpuLoad = (await si.currentLoad()).currentLoad
}

app.use('/info', require('./routes/info'))

app.use('/cpu', require('./routes/cpu'))
app.use('/os', require('./routes/os'))
app.use('/service', require('./routes/service'))
app.use('/storage', require('./routes/storage'))
app.use('/versions', require('./routes/versions'))


app.listen(process.env.PORT || 8080)
