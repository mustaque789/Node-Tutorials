// console.log("hello")
// const fs =require('fs');                              // file creation
// fs.writeFileSync('file1.txt','Hello, how you doing!')


// const app = require('./app')                    // importing variables
// console.log(app);
// console.log(app.x);
// console.log(app.z)


// 1. Create Server and run on browser
// const http= require('http');
// http.createServer((req,res)=>{
// res.write("Hello, this is sahil!");
// res.end();
// }).listen(4500);


// 2 . Simple API create ...step 1.Make server, 2.Create api header & n

// const data = require('./data')

// const http=require('http');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application\json'});
// resp.write(JSON.stringify(data));
// resp.end();
// }).listen(4500);


// 3. Input from command line

// const fs= require('fs');

// const input= process.argv;              // terminal command logic

// fs.writeFileSync(input[2],input[3]);     // adding file from terminal command

// fs.unlinkSync(input[3])                   // remove file from terminal command



// 4. Create files in a folder 

// const fs = require('fs');

// const path = require('path');                   // for getting 'Files' path
// const dirPath= path.join(__dirname,'files');    // for getting 'Files' path
// // console.warn(dirPath)

// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,`multiples files formed together in a folder`)
// }