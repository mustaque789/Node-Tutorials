const express = require('express')
const app = express();
const dbConnect = require('./mongodb');


// 1. GET API method

// app.get('/', async (req, res)=>{
// let data = await dbConnect();
// data = await data.find().toArray();
// res.send(data)
// })
// app.listen(5002);


//********************************* */


// 2. POST API method

// app.use(express.json());        // get data in node js/express from postman

// app.post('/', async (req, res)=>{
//     // console.log(req.body)
//     // res.send(req.body)


//     let data1 = await dbConnect();
//     let result  = await data1.insertOne(req.body)      // to insert data from postman to mongodb
//     res.send(result)
// })

// app.listen(5002);



//********************************************** */


// 3. PUT API method : 


app.use(express.json())

app.put('/', async (req,res)=>{

    let data = await dbConnect();
    let result = await data.updateOne(
        // {name: "peter"},
        // {$set: {price:1799}}
        {name: req.body.name},
        {$set: req.body}
    )
    res.send(result)
})

app.listen(5002);
