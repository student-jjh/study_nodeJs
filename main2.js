const fs = require('fs');

let filelist = fs.readdirSync('.');
fs.writeFileSync('news','Hello Node.js!')
console.log(filelist);