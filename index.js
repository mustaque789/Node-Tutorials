// console.log("hello")
// const fs =require('fs');                              // file creation
// fs.writeFileSync('file1.txt','Hello, how you doing!')


// const app = require('./app')                    // importing variables
// console.log(app);
// console.log(app.x);
// console.log(app.z)


//Create Server and run on browser
// const http= require('http');
// http.createServer((req,res)=>{
// res.write("Hello, this is sahil!");
// res.end();
// }).listen(4500);


//Simple API create ...step 1.Make server, 2.Create api header & n

const http=require('http');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify({'name':'sahil', 'age':'30'}));
resp.end();
}).listen(4500);