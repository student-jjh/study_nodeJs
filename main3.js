const { error } = require('console');
const fs = require('fs');

// console.log('Start');

// let content = fs.readFileSync('./news','utf8');
// console.log(content);

// console.log('Fin');


console.log('Start');

fs.readFile('./news','utf8',(error,data) =>{console.log(data);});

// let content = fs.readFileSync('./news','utf8');
// console.log(content);

console.log('Fin');