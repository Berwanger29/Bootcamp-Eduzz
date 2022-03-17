//https://nodejs.org/api/os.html

const os = require('os');
const { arch, platform, totalmem, freemem } = os;


setInterval(() => {
    const tram = parseInt(totalmem() / 1024 / 1024);
    const fram = parseInt(freemem() / 1024 / 1024);
    const usage = (fram / tram) * 100


    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRam: `${tram} MB`,
        FreeRam: `${fram} MB`,
        Usage: `${parseInt(usage)}%`
    }

    console.clear()
    console.table(stats)
    exports.stats = stats;
}, 3000)

