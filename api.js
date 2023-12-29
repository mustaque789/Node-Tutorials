const express = require('express')
const app = express();
const dbConnect = require('./mongodb');


// GET API method

// app.get('/', async (req, res)=>{
// let data = await dbConnect();
// data = await data.find().toArray();
// res.send(data)
// })



// POST API method

app.use(express.json());        // get data in node js/express from postman

app.post('/', async (req, res)=>{
    // console.log(req.body)
    // res.send(req.body)


    let data1 = await dbConnect();
    let result  = await data1.insertOne(req.body)      // to insert data from postman to mongodb
    res.send(result)
})

app.listen(5002);


