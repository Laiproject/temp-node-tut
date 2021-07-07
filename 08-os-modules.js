const os = require("os")
// info about current user
const user = os.userInfo();
console.log(user)

//method returns the system uptime 

const uptime =os.uptime();
console.log(uptime)
console.log(`This system Uptime is ${uptime} seconds`)


const currentOS = {
    name:os.type(),
    release : os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)