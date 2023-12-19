// API CREATION
// ROUTING
// MIDDLEWARE
// WEB PAGES (html) and CSS INTEGRATION


// *************************************

// ROUTING IN EXPRESS JS : 

const express = require('express');
const app =express();

app.get('/',(req, res)=>{
    // url : http://localhost:4000/?name=sahil&age=26
res.send("This is Homepage : "+req.query.age)
console.log(req.query.name)
});

app.get('/about',(req, res)=>{
res.send("<h1>This is about page</h1>")     // HTML H1 added  through "server response "
})

app.get('/contact',(req, res)=>{
res.send('This is contact page :  <input type="text" placeholder="Page No"/>    <button>Submit</button>  ')    // HTML text input added     , and HTML button also added through "server response"
});

app.get('/help',(req, res)=>{
res.send(                                  // JSON data rendered through "server response"
    [
        {
            name:"sahil",
            age:26
        },
        {
            hobby:"boxing",
            level:"expert"
        },
    ]
);
})

app.listen(4000, ()=>{
console.log("express server running on port 4000")
})




// req and res :-  req and res used to communicate between client & server

// req is used to sent data or question to server
// req properties : req.query.xyz , req.params.id, req.body.xyz, req.headers['user-agent'] , req.method, req.url, req.cookies.sessionID

// res is used to send data or answer to client
// res properties : res.send(), res.json(), res.status(), res.setHeader(), res.redirect(), res.render()