//load the fs sync module
const {readFileSync, writeFileSync} = require('fs')

//read the file stored in variable
const first = readFileSync('./content/first-text.txt','utf8')

const second = readFileSync('./content/second-text.txt','utf8')

//write that readed value in new file called "result-sync.txt"
writeFileSync(
  './content/result-sync.txt', 
  `This is result: ${first} , ${second}`
)