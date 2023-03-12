const http = require('http');

const express = require('express');

const app = express();

const users = ["TOM","ANDY","joonHyeok",'codeit','ss'];

// let server = http.createServer(function (request,response){
//     // response.end("<h1>Hello world</h1>");
//     console.log(request.url);

//     if(request.url ==="/"){
//         response.end("<h1>Hello world</h1>")
//     }else if(request.url === '/users'){
//         response.end("<h1>"+users+'</h1>');
//     }else{
//         response.end("Page not Available");
//     }
// });

app.get('/',(request,response)=>{
    response.end("<h1>Hello world</h1>");
})

app.get('/users',(request,response)=>{
    response.end(`<h1>${users}</h1>`);
})

app.get('/users/:id',(request,response)=>{
    console.log(request.params);
    const userName = users[request.params.id-1];
    response.end(`<h1>${userName}</h1>`);
})

app.get('*',(request,response)=>{
    response.end("<h1>Page not Available</h1>");
})
 
app.listen(3000);

// server.listen(3000);

