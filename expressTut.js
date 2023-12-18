// API CREATION
// ROUTING
// MIDDLEWARE
// WEB PAGES (html) and CSS INTEGRATION


// *************************************

// ROUTING IN EXPRESS JS : 

const express = require('express');
const app =express();

app.get('/',(req, res)=>{
res.send("This is Homepage")
});

app.get('/about',(req, res)=>{
res.send("This is about page")
})

app.get('/contact',(req, res)=>{
res.send("This is contact page")
});

app.listen(3000, ()=>{
console.log("express server running on port 3000")
})