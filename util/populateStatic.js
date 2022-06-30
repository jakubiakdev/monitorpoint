const si = require('systeminformation');

async function update() {
    static.os = await si.osInfo()
    static.cpuInfo = await si.cpu()
}

module.exports = update