// os module
const { Console } = require('console')
const os = require('os')

//get user info by using os module
const user = os.userInfo()
console.log(user);
console.log(`My system runtime for this program is ${os.uptime()} seconds`);

const currentos = {
  systemType : os.type(),
  release : os.release(),
  totalmemory : os.totalmem(),
  freememory : os.freemem()
}
console.log(currentos)